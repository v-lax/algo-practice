function interpret(command){
  let output = "";
  for(let i=0;i<command.length;i++){
    if(command[i]==="G"){
      output+="G"
    }else if(command[i]==="(" && command[i+1]===")"){
      output+="o"
    }else if(command[i]==="("&&command[i+1]==="a"){
      output+="al"
    }
  };
  return output
}