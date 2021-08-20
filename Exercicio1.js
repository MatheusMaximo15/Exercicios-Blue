console.log("Programa de Reajustes.");
let salario = parseFloat(prompt("Digite seu salário atual"));
let aumento 
let percentual
let dif 


 if (salario <=280)
    {
     aumento = (0.2*salario) + salario;
      percentual = "20%";
      dif = aumento - salario;
     
    }
    else if (salario > 280 && salario <= 700)
    {
    	aumento = (0.15*salario)+salario;
      percentual = "15%";
      dif = aumento - salario;
      
    }
     else if (salario > 700 && salario <= 1500)
    {
    	aumento = (0.10*salario)+salario;
      percentual = "10%";
      dif = aumento - salario;
      
    }
    else if (salario > 1500)
    {
    	aumento = (0.05*salario)+salario;
       percentual = "05%";
      dif = aumento - salario;
      
    }

console.log(`O salário antes de ser reajustado era R$${salario}`);
console.log(`O percentual de de reajuste foi ${percentual}%`);
console.log(`O valor de aumento foi R$${dif}`);
console.log(`O seu novo salario é R$${aumento}`)
