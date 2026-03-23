import promptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = promptSync();

// ---------- CLUBES E PROBABILIDADES ---------- //
interface Clube {
    nome: string;
    continente: "BR"|"EU";
    titulos: { [key: string]: number }; // CD em %
}

// Brasileiros
const clubes: Clube[] = [
    {nome:"Flamengo", continente:"BR", titulos:{Brasileirao:30,CopaBrasil:20,Estadual:50,Libertadores:18,CopaNordeste:0,Recopa:10,Supercopa:15,SulAmericana:5}},
    {nome:"Palmeiras", continente:"BR", titulos:{Brasileirao:28,CopaBrasil:18,Estadual:35,Libertadores:16,CopaNordeste:0,Recopa:8,Supercopa:12,SulAmericana:5}},
    {nome:"São Paulo", continente:"BR", titulos:{Brasileirao:10,CopaBrasil:8,Estadual:20,Libertadores:8,CopaNordeste:0,Recopa:5,Supercopa:6,SulAmericana:8}},
    {nome:"Corinthians", continente:"BR", titulos:{Brasileirao:9,CopaBrasil:10,Estadual:25,Libertadores:7,CopaNordeste:0,Recopa:4,Supercopa:6,SulAmericana:7}},
    {nome:"Santos", continente:"BR", titulos:{Brasileirao:5,CopaBrasil:5,Estadual:18,Libertadores:4,CopaNordeste:0,Recopa:2,Supercopa:4,SulAmericana:6}},
    {nome:"Grêmio", continente:"BR", titulos:{Brasileirao:4,CopaBrasil:8,Estadual:35,Libertadores:5,CopaNordeste:0,Recopa:3,Supercopa:5,SulAmericana:8}},
    {nome:"Internacional", continente:"BR", titulos:{Brasileirao:4,CopaBrasil:7,Estadual:30,Libertadores:4,CopaNordeste:0,Recopa:3,Supercopa:5,SulAmericana:7}},
    {nome:"Atlético Mineiro", continente:"BR", titulos:{Brasileirao:5,CopaBrasil:8,Estadual:40,Libertadores:5,CopaNordeste:0,Recopa:3,Supercopa:5,SulAmericana:7}},
    {nome:"Cruzeiro", continente:"BR", titulos:{Brasileirao:3,CopaBrasil:6,Estadual:35,Libertadores:3,CopaNordeste:0,Recopa:2,Supercopa:4,SulAmericana:6}},
    {nome:"Fluminense", continente:"BR", titulos:{Brasileirao:4,CopaBrasil:6,Estadual:40,Libertadores:4,CopaNordeste:0,Recopa:2,Supercopa:4,SulAmericana:6}},
    {nome:"Botafogo", continente:"BR", titulos:{Brasileirao:3,CopaBrasil:6,Estadual:25,Libertadores:3,CopaNordeste:0,Recopa:2,Supercopa:4,SulAmericana:5}},
    {nome:"Vasco da Gama", continente:"BR", titulos:{Brasileirao:2,CopaBrasil:5,Estadual:20,Libertadores:2,CopaNordeste:0,Recopa:1,Supercopa:3,SulAmericana:4}},
    {nome:"Athletico Paranaense", continente:"BR", titulos:{Brasileirao:3,CopaBrasil:5,Estadual:25,Libertadores:3,CopaNordeste:0,Recopa:2,Supercopa:4,SulAmericana:6}},
    {nome:"Coritiba", continente:"BR", titulos:{Brasileirao:1,CopaBrasil:2,Estadual:15,Libertadores:1,CopaNordeste:0,Recopa:1,Supercopa:2,SulAmericana:3}},
    {nome:"Bahia", continente:"BR", titulos:{Brasileirao:1,CopaBrasil:2,Estadual:20,Libertadores:1,CopaNordeste:20,Recopa:1,Supercopa:2,SulAmericana:3}},
    {nome:"Ceará", continente:"BR", titulos:{Brasileirao:0.5,CopaBrasil:1,Estadual:15,Libertadores:0.5,CopaNordeste:15,Recopa:0.5,Supercopa:1,SulAmericana:2}},
    {nome:"Fortaleza", continente:"BR", titulos:{Brasileirao:0.5,CopaBrasil:1,Estadual:15,Libertadores:0.5,CopaNordeste:15,Recopa:0.5,Supercopa:1,SulAmericana:2}},
    {nome:"Goiás", continente:"BR", titulos:{Brasileirao:0.5,CopaBrasil:1,Estadual:10,Libertadores:0.5,CopaNordeste:0,Recopa:0.5,Supercopa:1,SulAmericana:1}},
    {nome:"Red Bull Bragantino", continente:"BR", titulos:{Brasileirao:2,CopaBrasil:3,Estadual:10,Libertadores:2,CopaNordeste:0,Recopa:1,Supercopa:2,SulAmericana:4}},
    {nome:"Sport Recife", continente:"BR", titulos:{Brasileirao:0.5,CopaBrasil:1,Estadual:15,Libertadores:0.5,CopaNordeste:15,Recopa:0.5,Supercopa:1,SulAmericana:0}}
];

// Europeus
const clubesEuropa: Clube[] = [
    {nome:"Manchester City", continente:"EU", titulos:{CampeonatoNacional:80,CopaNacional:50,Champions:20,EuropaLeague:15,Recopa:0,Supercopa:0,SulAmericana:0}},
    {nome:"PSG", continente:"EU", titulos:{CampeonatoNacional:75,CopaNacional:45,Champions:20,EuropaLeague:15,Recopa:0,Supercopa:0,SulAmericana:0}},
    {nome:"Real Madrid", continente:"EU", titulos:{CampeonatoNacional:85,CopaNacional:50,Champions:20,EuropaLeague:15,Recopa:0,Supercopa:0,SulAmericana:0}},
    {nome:"Barcelona", continente:"EU", titulos:{CampeonatoNacional:80,CopaNacional:45,Champions:20,EuropaLeague:15,Recopa:0,Supercopa:0,SulAmericana:0}},
    {nome:"Bayern", continente:"EU", titulos:{CampeonatoNacional:80,CopaNacional:45,Champions:20,EuropaLeague:15,Recopa:0,Supercopa:0,SulAmericana:0}},
];

// ---------- FUNÇÕES ---------- //
interface Jogador {
    nome: string;
    idade: number;
    posicao: number;
    clube: string;
    pais: string;
    jogos: number;
    gols: number;
    assistencias: number;
    titulos: { [key: string]: { total: number; clubes: { [club: string]: number } } };
    clubesQueJogou: { clube: string; anos: number }[];
    titulosAnoAnterior?: { [key: string]: boolean };
}

function d100() { return Math.floor(Math.random()*100)+1; }

function criarJogador(nome: string, posicao: number): Jogador {
    const clubeInicial = clubes[Math.floor(Math.random()*clubes.length)].nome;
    return {
        nome,
        idade: 17,
        posicao,
        clube: clubeInicial,
        pais: "Brasil",
        jogos: 0,
        gols: 0,
        assistencias: 0,
        titulos: {},
        clubesQueJogou: [{clube:clubeInicial, anos:0}]
    };
}

function adicionarTitulo(jogador: Jogador, titulo: string, clube: string){
    if(!jogador.titulos[titulo]) jogador.titulos[titulo]={total:0,clubes:{}};
    jogador.titulos[titulo].total++;
    jogador.titulos[titulo].clubes[clube]=(jogador.titulos[titulo].clubes[clube]||0)+1;
}

function ganharTitulos(jogador: Jogador){
    const titulosAno: string[] = [];
    const clubeAtual = clubes.find(c=>c.nome===jogador.clube)||clubesEuropa.find(c=>c.nome===jogador.clube);
    if(!clubeAtual) return titulosAno;

    // regras Recopa/Supercopa
    const ganhouLib = jogador.titulosAnoAnterior?.Libertadores || false;
    const ganhouSul = jogador.titulosAnoAnterior?.SulAmericana || false;
    const ganhouBras = jogador.titulosAnoAnterior?.Brasileirao || false;
    const ganhouCopaB = jogador.titulosAnoAnterior?.CopaBrasil || false;
    const ganhouCamNac = jogador.titulosAnoAnterior?.CampeonatoNacional || false;
    const ganhouCopaNac = jogador.titulosAnoAnterior?.CopaNacional || false;

    jogador.titulosAnoAnterior={};

    for(let t in clubeAtual.titulos){
        let chance = clubeAtual.titulos[t];
        if(t==="Recopa") {
            if(ganhouLib||ganhouSul||ganhouChampions(jogador.clube)){
                if(d100()<=chance){ titulosAno.push(chalk.magenta(t)); adicionarTitulo(jogador,t,jogador.clube); jogador.titulosAnoAnterior[t]=true; }
            }
        } else if(t==="Supercopa"){
            if(ganhouBras||ganhouCopaB||ganhouCamNac||ganhouCopaNac){
                if(d100()<=chance){ titulosAno.push(chalk.magenta(t)); adicionarTitulo(jogador,t,jogador.clube); jogador.titulosAnoAnterior[t]=true; }
            }
        } else if(t==="Libertadores"){
            if((!ganhouBras&&!ganhouCopaB&&!ganhouLib&&!ganhouSul && d100()<=chance) || (ganhouLib && d100()<=chance)) { 
                titulosAno.push(chalk.green(t)); adicionarTitulo(jogador,t,jogador.clube); jogador.titulosAnoAnterior[t]=true; 
            }
        } else if(t==="SulAmericana"){
            if((!ganhouBras&&!ganhouCopaB&&!ganhouLib&&!ganhouSul && Math.random()<0.3 && d100()<=chance) || (ganhouSul && d100()<=chance)) { 
                titulosAno.push(chalk.green(t)); adicionarTitulo(jogador,t,jogador.clube); jogador.titulosAnoAnterior[t]=true; 
            }
        } else {
            if(d100()<=chance){ titulosAno.push(chalk.green(t)); adicionarTitulo(jogador,t,jogador.clube); jogador.titulosAnoAnterior[t]=true; }
        }
    }

    return titulosAno;
}

function ganhouChampions(clube: string){
    return clubesEuropa.some(c=>c.nome===clube);
}

function gerarPropostas(jogador: Jogador){
    const propostas: Clube[] = [];
    const todosTimes = [...clubes,...clubesEuropa];
    while(propostas.length<3){
        const c = todosTimes[Math.floor(Math.random()*todosTimes.length)];
        if(c.nome!==jogador.clube && !propostas.includes(c)) propostas.push(c);
    }
    return propostas;
}

// ---------- SIMULAÇÃO ---------- //
const nome = prompt("Nome: ").trim()||"Jogador Misterioso";
let posicao:number;
do{ posicao = Number(prompt("Posição (1-Defesa,2-Meio,3-Ataque): ")); }while(posicao<1||posicao>3||isNaN(posicao));

const jogador = criarJogador(nome,posicao);

console.log(chalk.cyan("=================================="));
console.log(chalk.bold.green(`🏆 Bem-vindo ao Simulador de Carreira de Futebol! 🏆`));
console.log(chalk.white(`Você é ${chalk.bold(jogador.nome)}, um ${posicao===1?"defensor":posicao===2?"meio-campista":"atacante"} que começou no ${chalk.green(jogador.clube!)}.`));
console.log(chalk.white(`Você tem ${chalk.yellow(jogador.idade.toString())} anos.`));
console.log(chalk.cyan("=================================="));

let ano=0,melhorAno=0,tempArtilheira=0,key=true;

while(key){
    ano++;
    const idadeAtual = jogador.idade + ano;
    const jogosTemp = Math.floor(Math.random()*50)+20;
    const golsTemp = Math.floor(Math.random()*30+5);
    const assistTemp = Math.floor(Math.random()*10);

    jogador.jogos+=jogosTemp;
    jogador.gols+=golsTemp;
    jogador.assistencias+=assistTemp;

    const titulosAno = ganharTitulos(jogador);

    const historico = jogador.clubesQueJogou.find(c=>c.clube===jogador.clube);
    if(historico) historico.anos++; else jogador.clubesQueJogou.push({clube:jogador.clube,anos:1});

    if(golsTemp>melhorAno){ melhorAno=golsTemp; tempArtilheira=ano; }

    console.log(chalk.cyan(`\n╔══════════════════════╗`));
    console.log(chalk.cyan(`Ano ${ano} — Clube: ${chalk.green(jogador.clube)} | Idade: ${chalk.yellow(idadeAtual)}`));
    console.log(chalk.white(`Jogos: ${jogosTemp} | Gols: ${golsTemp} | Assist: ${assistTemp}`));
    if(titulosAno.length>0){ console.log(chalk.green(`🏆 Títulos deste ano:`)); titulosAno.forEach(t=>console.log(`  ${t}`)); }

    if(Math.random()<0.4){
        const propostas = gerarPropostas(jogador);
        console.log(chalk.blue(`\n📨 Propostas de Transferência:`));
        propostas.forEach((p,i)=>console.log(`  ${i+1}. ${chalk.green(p.nome)}`));
        const escolha = prompt(`Deseja mudar de clube? (1-3 ou Enter para ficar): `);
        if([1,2,3].includes(Number(escolha))){
            const novoClube = propostas[Number(escolha)-1];
            jogador.clube = novoClube.nome;
            jogador.pais = novoClube.continente==="EU"?"Europa":"Brasil";
            jogador.clubesQueJogou.push({clube:novoClube.nome,anos:0});
            console.log(chalk.yellow(`\nVocê se transferiu para ${chalk.green(novoClube.nome)}!`));
        }
    }

    prompt("Pressione Enter para continuar...");
    if(idadeAtual>=35 && Math.random()<0.3){ key=false; console.log(chalk.red("\nFim da carreira!")); }
}

// ---------- RESUMO FINAL ---------- //
console.log(chalk.cyan(`\n╔══════════════════════════════════════════════╗`));
console.log(chalk.cyan(`║            RESUMO FINAL DA CARREIRA          ║`));
console.log(chalk.cyan(`╚══════════════════════════════════════════════╝`));
console.log(chalk.white(`Jogador: ${chalk.bold(jogador.nome)}`));
console.log(chalk.white(`Clubes em que jogou: ${jogador.clubesQueJogou.map(c=>`${chalk.green(c.clube)} (${c.anos})`).join(" → ")}`));
console.log(chalk.white(`País Atual: ${chalk.yellow(jogador.pais)}`));
console.log(chalk.white(`📅 Total Jogos: ${chalk.blue(jogador.jogos.toString())}`));
console.log(chalk.white(`⚽ Total Gols: ${chalk.green(jogador.gols.toString())}`));
console.log(chalk.white(`🎯 Total Assistências: ${chalk.green(jogador.assistencias.toString())}`));
console.log(chalk.white(`🏆 Melhor Ano: ${chalk.bold(tempArtilheira.toString())}° ano com ${chalk.yellow(melhorAno.toString())} gols`));

if(Object.keys(jogador.titulos).length>0){
    console.log(chalk.bold.green(`🏆 HISTÓRICO DE TÍTULOS:`));
    for(let t in jogador.titulos){
        const data = jogador.titulos[t];
        let clubesStr="";
        for(let c in data.clubes){ clubesStr+=`${data.clubes[c]}x ${chalk.green(c)}, `;}
        clubesStr = clubesStr.replace(/, $/,"");
        console.log(chalk.green(`  ${t}: ${data.total}x (${clubesStr})`));
    }
}else{ console.log(chalk.yellow(`😞 Nenhum título conquistado.`)); }

console.log(chalk.cyan(`╔══════════════════════════════════════════════╗`));
console.log(chalk.cyan(`║        OBRIGADO POR JOGAR! 🏆               ║`));
console.log(chalk.cyan(`╚══════════════════════════════════════════════╝`));