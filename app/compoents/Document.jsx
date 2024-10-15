import { makeStyles, Button, Link } from "@fluentui/react-components";
import {} from "@fluentui/react-icons";

const useStyle = makeStyles({
  root: {
    margin: "10px 0px",
  },
  list: {
    listStyleType: "none",
  },
  link: {
    margin: "10px 5px",
    backgroundColor: 'transperent',
  },
  button: {
    margin: "10px 5px",
    backgroundColor: "black",
    color: "white",
    border:'none'
  },
  dbScriptarea:{
    width:'890px',
    height:'310px',
    resize:'none',
    backgroundimage: 'linear-gradient(to right top, #f8f9fa, #f4f6f7, #f0f2f4, #edeff2, #e9ecef)'
  }
});

const Document = () => {
  const classes = useStyle();
  const scriptquery =`
              LOAD CSV WITH HEADERS FROM 'https://drive.google.com/uc?export=download&id=1lKCWI_5mfxroIfHbiI9beyNppMGNe9qB' as row FIELDTERMINATOR ';'
              WITH row.id as id, row.name as name,
              apoc.convert.fromJsonList(row.country_code) as countries,
              apoc.convert.fromJsonList(row.long) as longitudes,
              apoc.convert.fromJsonList(row.lat) as latitudes,
              apoc.convert.fromJsonList(row.node_id) as nodes,
              apoc.convert.fromJsonMap(replace(row.param,'None','null')) as params

             MERGE (start:Junction{id:nodes[0]}) ON CREATE SET start.country = countries[0], start.loc = point({latitude:latitudes[0],longitude:longitudes[0]})

             MERGE (end:Junction{id:nodes[1]}) ON CREATE SET end.country = countries[1], end.loc = point({latitude:latitudes[1],longitude:longitudes[1]})

             MERGE (start)-[pipe:PIPE{id:id}]->(end) ON CREATE SET pipe.name = name, pipe += params
            `

  return (
    <section className={classes.root}>
      <h2>Documentation</h2>
      <ul className={classes.list}>
        <li>
          <p>
            I'm using a Neo4j Aura instance on Google Cloud Platform to set up a
            graph database. To build the dashboard, I’m using the online NeoDash
            application. Finally, to host the European GAP pipeline dashboard,
            I'm using the NeoDash standalone method along with GitHub hosting.
            Once the dashboard is hosted, it will be integrated into a Next.js
            application. 😊<br></br>
            <Link
              href="https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io?inv=1&invt=AbeE4w"
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.button}>Neo4j Aura</Button>
            </Link>
            <Link
              href="https://neodash.graphapp.io/"
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.button}>NeoDash</Button>
            </Link>
            <Link
              href="https://neo4j.com/labs/neodash/2.1/developer-guide/standalone-mode/"
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.button}>Deploying Dashboard</Button>
            </Link>
            <Link
              href="https://github.com/neo4j-labs/neodash"
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.button}>NeoDash Github</Button>
            </Link>
            <Link
              href="https://react.fluentui.dev/?path=/docs/concepts-introduction--docs"
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.button}>Fluent UI</Button>
            </Link>
          </p>
        </li>
        <li>
          <ul className={classes.list}>
            <li>
              <h3>Database Script:</h3>
            </li>
            <li>
              <textarea className={classes.dbScriptarea}>{scriptquery}</textarea>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Document;
