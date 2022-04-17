import "./ProjectDetailsPage.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useParams } from "react-router";
import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails";
import useScrollToTop from "../../customHooks/useScrollToTop";
import Badge from "../../components/atoms/badge/Badge";
import Img from "../../components/atoms/img/Img";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, project } = useGetProjectDetails(id);
  useScrollToTop();

  function setBadgeColor(status) {
    switch (status) {
      case "Live":
        return "success";
      case "Not Live":
        return "danger";
      case "Under Construction":
      case "Remodeling":
        return "warning";
      default:
        return "secondary";
    }
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Message variant="danger" isDismissible>
        {error}
      </Message>
    );
  }
  return (
    <div className="dkProjectDetailsPage">
      
    </div>
  );
};

export default ProjectDetailsPage;
