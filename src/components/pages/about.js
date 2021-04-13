import React from "react";
import profilePicture from "../../../static/assets/images/bio/testheadshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        ullam delectus recusandae fugit, possimus nostrum eaque pariatur porro.
        Incidunt praesentium quam vero neque qui rerum cumque facere tempora
        accusamus minus? Ut quos explicabo nesciunt, dignissimos soluta sint
        incidunt eius, repudiandae sequi ex aspernatur repellendus distinctio
        assumenda nemo laborum facere nam ipsa est obcaecati. Architecto
        voluptatum unde sunt blanditiis iusto illum! Soluta quibusdam quo magni
        id omnis suscipit quod nisi qui, maiores, enim eligendi minima
        cupiditate distinctio debitis. Ipsam ab unde perferendis corrupti
        laboriosam doloribus at, autem error aspernatur cum quos. Voluptatibus
        minima minus possimus? Doloribus molestiae saepe quam quasi delectus
        fugiat rerum consequuntur earum error, nihil at? Id numquam quod nemo
        vel natus magni cumque assumenda. Vero sit hic praesentium?
        Reprehenderit libero atque laudantium modi, dolor vero dolorem
        distinctio. Recusandae qui illum laudantium eligendi molestiae non
        expedita placeat error reiciendis aliquid? Veniam expedita quaerat et
        dolores facere cumque doloribus provident.
      </div>
    </div>
  );
}
