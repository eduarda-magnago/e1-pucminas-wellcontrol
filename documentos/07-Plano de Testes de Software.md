# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na internet [WellControl](https://wellcontrol.site);
- Navegadores da internet: Chrome, Firefox em Desktop e Mobile.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: Verificar o funcionamento dos links da página Home</td>
    <td>
      <ul>
        <li>RF-01: A aplicação deverá conter uma página inicial com informações da WellControl, funcionamento e meios de contato.</li>
        <li>RF-02: A aplicação deve permitir ao usuário cadastrar uma conta na página inicial.</li>
        <li>RF-03: A aplicação deve permitir ao usuário fazer o login da sua conta na página inicial.</li>
      </ul>
    </td>
    <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Visualizar a página Home.</li>
        <li>Clicar nos links da página Home.</li>
      </ol>
    </td>
    <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
    <td>Lorrayne</td>
  </tr>
  <tr>
    <td>CT-02: Verificar o acesso e informações exibidas no Dashboard</td>
    <td>
      <ul>
        <li>RF-04: Permitir que o usuário tenha acesso a um dashboard com informações pessoais, consultas e medicamentos.</li>
        <li>RF-13: Permitir que o usuário tenha acesso às medições de glicemia e registre novas medições.</li>
      </ul>
    </td>
    <td>Verificar se a Dashboard exibe as informações pessoais, consultas, medicamentos e medições de glicemia do usuário.</td>
    <td>
      <ol>
        <li>Logar na aplicação com um usuário válido.</li>
        <li>Acessar a Dashboard.</li>
        <li>Confirmar a exibição de consultas, medicamentos e medições de glicemia.</li>
      </ol>
    </td>
    <td>A Dashboard deve exibir corretamente todas as informações configuradas para o usuário.</td>
    <td>Igor</td>
  </tr>
  <tr>
    <td>CT-03: Verificar o registro de horários para medicamentos e consultas</td>
    <td>
      <ul>
        <li>RF-05: Possibilitar o registro dos horários e datas para cada medicação prescrita pelo médico.</li>
        <li>RF-06: Possibilitar o registro dos horários e datas para cada consulta a ser realizada.</li>
      </ul>
    </td>
    <td>Garantir que o usuário possa registrar horários e datas para consultas e medicações.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a seção de registro de consultas e medicamentos.</li>
        <li>Registrar um horário e uma data para um medicamento e uma consulta.</li>
      </ol>
    </td>
    <td>Os registros devem ser salvos corretamente e exibidos nas respectivas seções.</td>
    <td>Andréas</td>
  </tr>
  <tr>
    <td>CT-04: Verificar a funcionalidade de lembretes</td>
    <td>
      <ul>
        <li>RF-07: O usuário poderá ativar lembretes diários para medicamentos, consultas ou newsletter.</li>
      </ul>
    </td>
    <td>Testar se os lembretes configurados pelo usuário são ativados e enviados corretamente.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a seção de configurações de lembretes.</li>
        <li>Ativar lembretes para medicamentos, consultas e newsletter.</li>
      </ol>
    </td>
    <td>Os lembretes configurados devem ser enviados corretamente no horário definido.</td>
    <td>Carolina</td>
  </tr>
  <tr>
    <td>CT-05: Verificar a busca de farmácias próximas</td>
    <td>
      <ul>
        <li>RF-08: Permitir que o usuário encontre uma farmácia próxima de sua casa.</li>
      </ul>
    </td>
    <td>Validar que a funcionalidade de busca de farmácias exibe resultados relevantes com base na localização do usuário.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a tela de busca de farmácias pelo menu lateral.</li>
        <li>Inserir a localização do usuário e realizar a busca.</li>
      </ol>
    </td>
    <td>A busca deve exibir farmácias próximas corretamente com informações relevantes.</td>
    <td>Eduarda</td>
  </tr>
<tr>
    <td>CT-06: Verificar o cálculo de dose de insulina</td>
    <td>
      <ul>
        <li>RF-09: Permitir que o usuário calcule sua dose de insulina nas refeições.</li>
      </ul>
    </td>
    <td>Garantir que o cálculo de dose de insulina seja feito corretamente com base nos dados fornecidos pelo usuário.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a funcionalidade de cálculo de insulina.</li>
        <li>Inserir os dados necessários e calcular.</li>
      </ol>
    </td>
    <td>O cálculo deve ser exibido corretamente conforme os parâmetros fornecidos.</td>
    <td>Igor</td>
  </tr>
  <tr>
    <td>CT-07: Verificar a medição da pressão arterial</td>
    <td>
      <ul>
        <li>RF-10: Permitir que o usuário possa medir sua pressão arterial.</li>
      </ul>
    </td>
    <td>Testar se a funcionalidade de registro de pressão arterial funciona corretamente.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a funcionalidade de medição de pressão arterial.</li>
        <li>Inserir os valores medidos pelo usuário.</li>
      </ol>
    </td>
    <td>Os valores devem ser registrados e exibidos corretamente.</td>
    <td>Andréas</td>
  </tr>
  <tr>
    <td>CT-08: Verificar exportação de dados da Dashboard</td>
    <td>
      <ul>
        <li>RF-11: Permitir que os dados monitorados pelos gráficos na Dashboard sejam facilmente exportados.</li>
      </ul>
    </td>
    <td>Garantir que os dados da Dashboard possam ser exportados corretamente.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a funcionalidade de exportação de dados na Dashboard na página inicial.</li>
        <li>Exportar os dados e validar o arquivo gerado.</li>
      </ol>
    </td>
    <td>O arquivo exportado deve conter os dados corretos e estar no formato csv.</td>
    <td>Eduarda</td>
  </tr>
  <tr>
    <td>CT-09: Verificar personalização de preferências do usuário</td>
    <td>
      <ul>
        <li>RF-12: Personalização das preferências pessoais do usuário, como troca de foto de perfil e email.</li>
      </ul>
    </td>
    <td>Testar se as preferências do usuário podem ser personalizadas corretamente.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a seção de configurações pessoais.</li>
        <li>Alterar a foto de perfil e email.</li>
      </ol>
    </td>
    <td>As alterações devem ser salvas corretamente e refletidas no perfil do usuário.</td>
    <td>Lorrayne</td>
  </tr>
  <tr>
    <td>CT-10: Verificar registro de refeições</td>
    <td>
      <ul>
        <li>RF-14: Possibilitar o registro de refeições diárias para monitoramento nutricional.</li>
      </ul>
    </td>
    <td>Garantir que o usuário possa registrar suas refeições diárias corretamente.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a funcionalidade de registro de refeições.</li>
        <li>Inserir os dados da refeição e salvar.</li>
      </ol>
    </td>
    <td>Os dados da refeição devem ser registrados corretamente e exibidos no histórico.</td>
    <td>Carolina</td>
  </tr>
  <tr>
    <td>CT-11: Verificar relato de sintomas</td>
    <td>
      <ul>
        <li>RF-15: Permitir o registro diário de sintomas.</li>
      </ul>
    </td>
    <td>Testar a funcionalidade de registro de sintomas diários.</td>
    <td>
      <ol>
        <li>Logar na aplicação.</li>
        <li>Acessar a funcionalidade de registro de sintomas.</li>
        <li>Inserir os sintomas e salvar.</li>
      </ol>
    </td>
    <td>Os registros de sintomas devem ser salvos corretamente.</td>
    <td>Carolina</td>
  </tr>
<tr>
  <td>CT-12: Verificar a exibição de conteúdo educativo na tela dedicada</td>
  <td>
    <ul>
      <li>RF-16: A aplicação deverá conter uma tela com conteúdo educativo, na qual o usuário possa ter mais conhecimento dentro da área da saúde, com posts informativos e interessantes que possam agregar em sua rotina.</li>
    </ul>
  </td>
  <td>Testar a exibição correta do conteúdo educativo e garantir que ele está acessível ao usuário.</td>
  <td>
    <ol>
      <li>Logar na aplicação.</li>
      <li>Navegar até a tela de conteúdo educativo através do menu.</li>
      <li>Verificar se os posts informativos estão sendo exibidos corretamente.</li>
      <li>Clicar em um post para verificar seu conteúdo detalhado.</li>
    </ol>
  </td>
  <td>
    A tela de conteúdo educativo deve exibir posts informativos corretamente, e o usuário deve conseguir acessar o conteúdo completo de cada post.
  </td>
  <td>Lorrayne</td>
</tr>
</table>
