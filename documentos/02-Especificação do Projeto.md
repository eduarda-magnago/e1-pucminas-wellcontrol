# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1 - Paciente</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Paciente diagnosticado com uma doença crônica, como hipertensão ou
diabetes, que requer acompanhamento constante e uso regular de
medicamentos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Lembretes de dosagem e horário de medicamentos. Registro de
medições, como pressão arterial e glicemia. Informações sobre
dietas e atividades físicas que ajudem na gestão da condição.
Informações sobre serviços de saúde próximos para facilitar o
acesso aos cuidados médicos e aos medicamentos. Histórico de
consultas médicas e receitas para referência.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2 - Profissional da Saúde/Cuidador</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa que auxilia e monitora o paciente nas atividades diárias de saúde,
incluindo administração de medicamentos e dosagens.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Consulta do histórico médico do paciente, incluindo os
procedimentos e remédios utilizados. Notificações de futuras
consultas médicas e dados sobre o estado do paciente.
Capacidade para documentar eventos médicos, como sintomas
incomuns ou efeitos secundários da medicação. Facilidade de
comunicação com familiares e instruções em caso de
emergências.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Cuidadora de idosos | Controlar todas as medicações | Monitorar a medicação utilizada, suas doses e horários para garantir que o tratamento seja seguido corretamente |
| Portador de Hipertensão | Lembrar de todas as medicações ao longo do dia e semana | Manter o controle e o nível ideal da pressão arterial, evitando complicações |
| Portador de Diabetes | Registrar os níveis glicemia diariamente | Fornecer um histórico detalhado de medições ao meu médico, ajudando a ajustar o tratamento conforme necessário |
| Portador de Diabetes | Calcular a dose das medicações com base nos resultados das medições de glicemia  | Evitar tomar doses erradas que possam comprometer minha saúde |
| Portador de doença crônica  | Receber notificações caso um medicamento não seja tomado no horário prescrito | Manter o controle das medicações e assegurar que o tratamento está sendo seguido corretamente |
| Responsável | Saber quando será a próxima consulta médica | Garantir que o paciente esteja presente na consulta |
| Paciente com Insuficiência Cardíaca | Receber lembretes para medir e registrar minha frequência cardíaca e pressão arterial diariamente | Monitorar minha condição e relatar qualquer alteração significativa ao meu médico |
| Cuidador de Paciente Idoso | Ter acesso a uma agenda de medicamentos e consultas | Gerenciar todas as necessidades de saúde do paciente de forma eficiente evitando complicações |
| Portador de Hipertensão | Registrar a medição da minha pressão arterial após atividades físicas ou situações de estresse | Monitorar como essas condições afetam minha pressão e ajustar minhas atividades diárias ou medicação de acordo com as recomendações do meu médico |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
|RF-01|  A aplicação deverá conter uma página inicial com informações da WellControl, funcionamento e meios de contato.  | Alta   |
|RF-02|  A aplicação deve permitir ao usuário cadastrar uma conta na página inicial.  | Alta   |
|RF-03|  A aplicação deve permitir ao usuário fazer o login da sua conta na página inicial. | Alta   |
|RF-04|  Permitir que o usuário tenha acesso a uma dashboard na qual será contida suas principais informações pessoais e médicas, inidicando as próximas consultas a serem realizadas e próximos medicamentos a serem tomados para facilitar o acompanhamento.  | Alta   |
|RF-05|  Possibilitar o registro dos horários e datas para cada medicação prescita pelo médico. | Alta   |
|RF-06|  Possibilitar o registro dos horários e datas para cada consulta a ser realizada. | Alta   |
|RF-07|  O usuário poderá ter a opção de ativar envio de lembretes diários para tomar seus medicamentos, realizar consultas médicas ou receber atualizações da Newsletter da WellControl por email. | Alta   |
|RF-08|  Permitir que o usuário encontre uma farmácia próxima de sua casa. | Alta   |
|RF-09|  Permitir que o usuário calcule sua dose de insulina nas suas refeições. | Alta   |
|RF-10|  Permitir que o usuário possa medir sua pressão arterial. | Alta   |
|RF-11|  Permitir que os dados monitorados pelos gráficos na Dashboard sejam facilmente exportados.  | Baixa   |
|RF-12|  Personalização das preferências pessoais do usuário, como troca de foto de perfil e email. | Média   |
|RF-13|  Permitir que o usuário tenha acesso as medições de glicemia e que possa registrar uma nova sempre que desejar. | Alta   |
|RF-14|  Possibilitar o registro de refeições diárias para monitoramento nutricional. | Média   |
|RF-15|  Possibilitar o relato de sintomas como dor de cabeça, febre, tontura, entre outros, para melhor monitoramento de saúde do usuário. | Média   |
|RF-16|  A aplicação deverá conter uma tela com conteúdo educativo, na qual o usuário possa ter mais conhecimento dentro da área da sadúde, com posts informativos e interessantes que possam agregar em sua rotina. | Média   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos Não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01|  A interface deve ser intuitiva e de fácil navegação.                    | Alta   | 
|RNF-02|  Garantir a segurança dos dados dos usuários, com uso de criptografia para proteger informações pessoais e de saúde. | Alta | 
|RNF-03|  Sistema de fácil manutenção, permitindo que atualizações e correções de bugs sejam realizadas sem dificuldades.  | Média   | 
|RNF-04|  Acessibilidade para pessoas com deficiências auditivas e visual.                    | Média   | 
|RNF-05|  Possibilidade de geração de backup de dados.                    | Baixa   | 
|RNF-06|  Interação de usuários para exposição de feedback e sugestões de melhorias.                    | Baixa   | 
|RNF-07|  O sistema deve estar acessível na web.                    | Alta   | 
|RNF-08|  Atualizações recorrentes para incrementação de novas Features.                    | Média   | 
|RNF-09|  O aplicativo deve ser capaz de lidar com um grande número de usuários simultâneos.                    | Alta  | 
|RNF-10|  Funcionar em diferentes dispositivos e sistemas operacionais (IOS, Android, etc.)                    | Alta   | 
|RNF-11|  O código da aplicação deve ser documentado e seguir boas práticas de desenvolvimento, como a utilização de padrões de codificação e o versionamento de código.                    | Média   | 
|RNF-12|  A aplicação deve garantir que os usuários forneçam consentimento explícito e informado antes de qualquer coleta, uso ou compartilhamento de seus dados de saúde.                    | Alta  | 

**Prioridade: Alta / Média / Baixa. 

