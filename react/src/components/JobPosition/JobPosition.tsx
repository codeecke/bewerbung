import "./JobPosition.scss";
import { useState } from "react";
import { TJobPosition } from "../../../../shared/types/TJobPosition";
import StringList from "./StringList";

type TProps = {
  position: TJobPosition;
};

export default ({ position }: TProps) => {
  const [open, setOpen] = useState(false);

  const company = position.company && (
    <div className="job-position__company">{position.company}</div>
  );

  const shortDescription = (
    <div className="job-position__short-description">
      <div className="job-position__position">{position.position}</div>
      {company}
    </div>
  );

  const longDescription = (
    <>
      <div className="job-position__position">{position.position}</div>
      {company}
      <StringList title="Aufgaben" items={position.tasks} />
      <StringList title="Skills" items={position.skills} />
    </>
  );

  return (
    <div className="job-position" onClick={() => setOpen(!open)}>
      <div className="job-position__period">
        {position.start} bis {position.end}
      </div>
      <div className="job-position__description">
        {!open && shortDescription}
        {open && longDescription}
      </div>
    </div>
  );
};
