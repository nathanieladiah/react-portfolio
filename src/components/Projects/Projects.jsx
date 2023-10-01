import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase.config";
import Project from "../Project/Project";
import "./projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Get reference
        // const projectsRef = collection(db, "listings");

        // Create a query
        // const q = query(
        //   projectsRef,
        //   where("tags", "array-contains", params.categoryName),
        //   limit(3)
        // );

        // Execute query
        // const querySnap = await getDocs(q);
        const querySnap = await getDocs(collection(db, "projects"));

        const projects = [];
        querySnap.forEach((doc) => {
          return projects.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setProjects(projects);
        setLoading(false);
      } catch (error) {
        alert("Could not fetch projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects">
      {loading ? (
        <>Loading...</>
      ) : projects && projects.length > 0 ? (
        projects.map((project) => {
          console.log(project);
          return <Project key={project.id} data={project} />;
        })
      ) : (
        <p>No projects</p>
      )}
    </section>
  );
};
export default Projects;
