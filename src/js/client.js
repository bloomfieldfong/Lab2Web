const state = {
  tablero: [[0,0,0],[0,0,0],[0,0,0]],
  turno: 0,
  terminado : 0
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'TOTITO';

  const tablero = document.createElement('div');
  tablero.className = 'tablero';
  
  const turno = document.createElement('h2');
  turno.innerHTML = "Turno jugador: 1"

  const jugador = document.createElement('h1')
  jugador.className ="jugador"

  const reiniciar = document.createElement('button');
  reiniciar.className = "reiniciar"
  reiniciar.innerHTML = "Reiniciar"


  for (let i=0; i < 3; i++){
    const filas = document.createElement('div');
    filas.className = "filas";
    tablero.appendChild(filas); 
    
      for (let j=0; j < 3; j++){
        const columnas = document.createElement('button');
        columnas.className = "columnas";
        filas.appendChild(columnas);
        columnas.innerHTML ='<img src = "/assets/m.jpg">'
    
          columnas.onclick = () => {
            state.turno++;
            
            if(state.turno%2 == 0){
                
                state.tablero[i][j] = 1;
                columnas.innerHTML ='<img src = "/assets/O.png">'
                turno.innerHTML = "Turno jugador: 1"
                
            } else{
              
                state.tablero[i][j] = 2;
                columnas.innerHTML ='<img src = "/assets/X.png">'
                turno.innerHTML = "Turno jugador: 2"
            }

              //Comprobar si el jugador ha ganado en filas y columnas
            for(let k=0; k<3; k++ ){

              if(state.tablero[k][0] == 2 & state.tablero[k][1] == 2 & state.tablero[k][2] == 2){
                jugador.innerHTML = "Gana Jugador 1"
                state.terminado = 1;
              } 
              
              if(state.tablero[k][0] == 1 & state.tablero[k][1] == 1 & state.tablero[k][2] == 1){
                jugador.innerHTML = "Gana Jugador 2"
                state.terminado = 1;
              }

              if(state.tablero[0][k] == 2 & state.tablero[1][k] == 2 & state.tablero[2][k] == 2){
                jugador.innerHTML = "Gana Jugador 1"
                state.terminado = 1;
              } 
              
              if(state.tablero[0][k] == 1 & state.tablero[1][k] == 1 & state.tablero[2][k] == 1){
                jugador.innerHTML = "Gana Jugador 2"
                state.terminado = 1;
              }
  
            }

            if(state.tablero[0][0] == 2 & state.tablero[1][1] == 2 & state.tablero[2][2] == 2){
              jugador.innerHTML = "Gana Jugador 1"
              state.terminado = 1;
            } 

            if(state.tablero[0][0] == 1 & state.tablero[1][1] == 1 & state.tablero[2][2] == 1){
              jugador.innerHTML = "Gana Jugador 2"
              state.terminado = 1;
            }

            if(state.tablero[0][2] == 2 & state.tablero[1][1] == 2 & state.tablero[2][0] == 2){
              jugador.innerHTML = "Gana Jugador 1"
              state.terminado = 1;
            } 

            if(state.tablero[0][2] == 1 & state.tablero[1][1] == 1 & state.tablero[2][0] == 1){
              jugador.innerHTML = "Gana Jugador 2"
              state.terminado = 1;
              
            }

            if(state.terminado == 1)
              state.turno = 0;
              root.appendChild(reiniciar)
            };

          reiniciar.onclick = () => {
                columnas.innerHTML ='<img src ="/assets/m.jpg">'
                jugador.innerHTML = ""
                state.tablero = 0;

          };
      }
  }
  root.appendChild(title);
  root.appendChild(tablero);
  root.appendChild(jugador);
  root.appendChild(turno);
}
render(state);