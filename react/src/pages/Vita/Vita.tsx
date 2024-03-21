import cvData from "@shared/data/cv.json";
import JobPosition from "../../components/JobPosition/JobPosition";
import { Button, Grid } from "@mui/material";
import { TJobPosition } from "../../../../shared/types/TJobPosition";

export default () => {
  return (
    <>
      <h1>Lebenslauf</h1>
      <p>
        Es freut mich sehr, dass Sie sich für meinen Lebenslauf interessieren.
      </p>
      <p>
        Wenn Sie zu einer Position mehr erfahren möchten, können Sie einfach
        darauf klicken.
      </p>
      <div className="cv">
        {cvData.map((position: TJobPosition, key: number) => (
          <JobPosition key={key} position={position} />
        ))}
      </div>

      <Grid container sx={{}}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "4rem auto 2rem",
          }}
        >
          <Button variant="contained" href="/Lebenslauf.pdf" download={true}>
            Lebenslauf herunterladen
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
