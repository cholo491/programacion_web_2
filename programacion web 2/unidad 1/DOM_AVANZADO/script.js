import Form from "./componentes/formulario.js";
import tabla from "./componentes/tabla.js";
import cards from "./componentes/cards.js";
(()=>{
    Form.setDatos((task)=>{
        tabla.addTask(task);
        cards.update();
    });
})();