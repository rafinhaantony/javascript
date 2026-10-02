const fs = require('fs');

const equipamentos = [
  {
    codigo: 'EQ001',
    nome: 'Prensa Hidráulica',
    setor: 'Produção',
    operacional: true
  },
  {
    codigo: 'EQ002',
    nome: 'Torno CNC',
    setor: 'Usinagem',
    operacional: true
  },
  {
    codigo: 'EQ003',
    nome: 'Esteira Transportadora',
    setor: 'Logística',
    operacional: false
  }
];

fs.writeFileSync('equipamentos.json', JSON.stringify(equipamentos, null, 2));
console.log('Arquivo equipamentos.json gerado e gravado com sucesso!');