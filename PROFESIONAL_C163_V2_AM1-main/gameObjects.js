AFRAME.registerComponent("wire-fence", {
    init: function () {
      //Posición inicial x
      posX = -20;
      //Posición inicial z
      posZ = 85;
  
      for (var i = 0; i < 10; i++) {
        //Crear una entidad wire-fence
        var wireFence1 = document.createElement("a-entity");
        var wireFence2 = document.createElement("a-entity");
        var wireFence3 = document.createElement("a-entity");
        var wireFence4 = document.createElement("a-entity");
        
  
        //Establecer las posiciones x, y, z
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //Escala 
        var scale = { x: 2, y: 2, z: 2 };
      
  
        //Establecer el ID
        wireFence1.setAttribute("id", "wireFence1" + i);
        wireFence2.setAttribute("id", "wireFence2" + i);
        wireFence3.setAttribute("id", "wireFence3" + i);
        wireFence4.setAttribute("id", "wireFence4" + i);
        
        //Establecer la posición
        wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
        wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
        wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });
        
        //Establecer la escala
        wireFence1.setAttribute("scale", scale);
        wireFence2.setAttribute("scale", scale);
        wireFence3.setAttribute("scale", scale);
        wireFence4.setAttribute("scale", scale);

        //Establecer el modelo
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
  
  wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 })
  wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 })

        //Establecer el cuerpo físico
        wireFence1.setAttribute("static-body", {});
        wireFence2.setAttribute("static-body", {});
        wireFence3.setAttribute("static-body", {});
        wireFence4.setAttribute("static-body", {});
       
        var sceneEl = document.querySelector("#scene");
        //Añadir la entidad a la escena
        sceneEl.appendChild(wireFence1);
        sceneEl.appendChild(wireFence2);
        sceneEl.appendChild(wireFence3);
        sceneEl.appendChild(wireFence4);
        
  
      }
    },
    shootsound:function(){
      var entity =document.querySelector("#sound1");
      entity.component.sound.playSound();
    },
  });
