export const JobsListCard = ({ job }) => {
  // formato da vaga
  // {
  // 	"userId": 1,
  // 	"id": 1,
  // 	"position": "Desenvolvedor FullStack Jr",
  // 	"sallary": 3400,
  // 	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis orci nec felis varius pretium. Nam eu diam erat. Sed libero ante, finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan, turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet sodales sem tortor sed lectus.",
  // 	"user": {
  // 		"email": "kenzinho@mail.com",
  // 		"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
  // 		"name": "Kenzinho",
  // 		"age": 38,
  // 		"id": 1
  // 	}
  // },

  return (
    <>
      <li>
        <div>
          <button>{/* react icon depois */}</button>
          <button></button>
          <div>
            <h3>{job.position}</h3>
            <p>{job.description}</p>
          </div>
          <button>Candidatar-se</button>
        </div>
      </li>
    </>
  );

  // return (
  //   <>
  //     <li>
  //       <div>
  //         <button>{/* react icon depois */}</button>
  //         <div>
  //           <h3>Desenvolvedor Full Stack Jr</h3>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
  //             orci nec felis varius pretium. Nam eu diam erat. Sed libero ante,
  //             finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan,
  //             turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet
  //             sodales sem tortor sed lectus.{" "}
  //           </p>
  //         </div>
  //         <button>Candidatar-se</button>
  //       </div>
  //     </li>
  //   </>
  // );
};
