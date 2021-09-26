import PortfolioItem from "./portfolio-item.js";


function Portfolio(props) {

   const {projects} = props

   console.log(projects)

    return (
        <div>
            <h1 className="font-bold text-3xl mt-16"> Portfolio </h1>
            <div className=" sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5">
                {
                    projects.map((project) => 
                    <PortfolioItem key={project._id}
                                   image={project.mainImage.asset.url}
                                   alt={project.header}
                                   header={project.header}
                                   paragraph={project.description}/>)
                }
            </div>
        </div>
    )
}

export default Portfolio