const treinos = [
  [
    {
      typeTreino: "PEITO",
      title: "Supino Inclinado",
      src: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1287",
      subTitle: "Supino inclinado é a melhor opção para a parte superior do peitoral.",
      text: "Ele deve ser feito em um banco inclinado entre 30° e 45° firme seus pés no chão e retraia as escápulas e faça um arco com a coluna (preferencialmente use halteres). Não desça tanto o halter/barra pois pesquisas mostram que uma amplitude maior que o preciso não gera uma ativação maior no peitoral. ",
    },
    {
      title: "Supino Reto",
      src: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      subTitle: "Esse exercício, feito corretamente serve para o peitoral médio.",
      text: "Deixe o banco reto, firme os pés no chão ou apoio do banco e retraia as escápulas para deixar o peito em evidência e desça com a barra/halter (preferencialmente use halteres) até perto do peito (mesmo estudo que o item acima).",
    },
    {
      title: "Supino declinado",
      src: "https://www.g4physio.co.uk/wp-content/uploads/2016/11/Decline-DB-Press-3-scaled.jpg",
      subTitle: "Este exercício é o inverso do supino inclinado asssim trabalha a parte inferior.",
      text: "Para este exercício decline seu banco de supino suavemente nas regulações do banco, se não tiver essa opção coloque uma anilha em baixo do apoio do banco, retraia as escápulas para deixar o peito em evidência e desça com a barra/halter (preferencialmente use halteres).",
    },
  ],
  [
    {
      typeTreino: "TRÍCEPS",
      title: "Tríceps Francês",
      src: "https://fitnessvolt.com/wp-content/uploads/2021/12/French-Press.jpg",
      subTitle: "Alguns estudos mostram que este exercício é o melhor para o tríceps em geral.",
    text:"Basicamente, o tríceps francês pode ser feito tanto com barra ou halteres e até mesmo na polia com um auxílio de uma corda com participação estática dos músculos do ombro e do tronco.O movimento articular é uma extensão de cotovelo, que tem como motor primário, o complexo muscular do tríceps. Neste movimento, temos a solicitação das 3 cabeças do tríceps (média, curta e longa)."
  },
    {
      title: "tríceps francês testa",
      src: "https://images.pexels.com/photos/4608158/pexels-photo-4608158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subTitle: "Um ótimo exercício para a cabeça longa do tríceps.",
      text: "Ache uma polia, coloque o equipamento de sua preferência, como por exemplo a corda, fixe os cotovelos ao tronco e empurre o equipamento para baixo, deixando a corda 90° em relação ao seu ponto de origem. Não se esqueça de estufar o peito e retrair as escápulas. Firme os pés no chão de preferência um a frente do outro.",
    },
    {
      title: "Supino Fechado",
      src: "https://www.mundoboaforma.com.br/wp-content/uploads/2022/01/supino-triceps.jpg",
      subTitle: "Este é um dos melhores exercícios para a cabeça medial.",
      text: "Deixe o banco reto, retraia as escápulas assim como é feito no supino tradicional, firme os pés. Na fase concentrica do exercício não estique totalmente o braço para manter uma maior tensão sobre o músculo. Se puder fazer com halteres será bem melhor.",
    },
  ],
  [
    {
      typeTreino: "BÍCEPS",
      title: "Rosca direta",
      src: "https://blog.gsuplementos.com.br/wp-content/uploads/2020/03/rosca-direta.jpg",
      subTitle: "Este exercício é um dos melhores para a cabeça curta do bíceps.",
    text:'Pege uma barra, preferencialmente a "W", faça a subida e descida com os cotovelos e ombros fixos no tronco, e na hora da descida não estique o braço totalmente pois perderá a tensão do bíceps. Em relação as pernas deixe elas semi abertas as firmando bem no chão.'
  },
    {
      title: "Rosca Concentrada.",
      src: "https://3.bp.blogspot.com/-8BOhxdawMdg/XHtNBS0dEAI/AAAAAAAAARo/j1c6OGa-WPgr7ixc140iKkJ58xKOmaJyQCKgBGAs/w1200-h630-p-k-no-nu/Rosca%2Bconcentrada.jpg",
      subTitle: "Um ótimo exercício para a cabeça longa do bíceps.",
      text: "Ache um banco abra suas pernas um pouco mais do que o normal apoie seu cotovelo direito na parte interior da coxa direita (o mesmo para o outro braço), suba o peso o máximo que conseguir e desça sem perder a tensão do bíceps. Seu cotovelo se mantem estático, apenas seu ante braço irá para cima e para baixo. Não se esqueça de manter sua postura mesmo estando inclinado.",
    },
    {
      title: "Rosca Martelo",
      src: "https://1.bp.blogspot.com/-jWOvZmvb8Vw/XHskwUxcTAI/AAAAAAAAAQs/FUgSGthSb9E0huS6hzewO90GN_3L_DxEgCKgBGAs/s1600/Rosca%2Bmartelo.jpg",
      subTitle: "Essa rosca ativa o bíceps braquial, e também os músculos flexores do ante braço.",
      text: "Fique em pé ou sentado, pege dois halteres e deixe sua pegada neutra, suba simultaneamente ou separaradamente cada braço, mantenha cotovelos e ombros estáticos, estufe o peito, e suba até onde conseguir e desça sem perder a tensão.",
    },
  ],
  [
    {
      typeTreino: "COSTAS",
      title: "Remada Curvada Com Barra",
      src: "https://www.hipertrofia.org/blog/wp-content/uploads/2014/11/remada-curvada-1.jpg",
      subTitle: "Segundo alguns profissionais o melhor exercício para costas.",
    text:"Firme seus pés no chão com uma abertura suavemente maior que o normal, dobre discretamente os joelhos, e incline sua coluna, monte a barra com o peso nescessário, segure na barra com a pegada pronada e traga ela até a parte inferior do peito, Não deixe suas costas envergar."
  },
    {
      title: "Remada Cavalinho",
      src: "https://images.tcdn.com.br/img/img_prod/666419/43_2_20181104140020.jpg",
      subTitle: "Este exercício recruta suas dorsais.",
      text: "Incline suas costas assim como fez no exercício passado, fixe seus pés em uma distância padrão, faça a puxada com o cotovelo perto ao corpo e mantenha seu olhar para baixo. Em hipótese alguma deixe suas costas envergar. Se não tiver este exercício em sua academia faça a remada cerrote.",
    },
    {
      title: "Levantamento Terra",
      src: "https://mude.vc/wp-content/uploads/2013/02/levantamento-terra.jpg",
      subTitle: "Este agachamento trabalhara muito bem sua lombar.",
      text: "Monte a barra, uma mão fará a pegada supinada, a outra fará a pronada, comece agachado e levante a barra até fazer a extensão de quadril, de maneira alguma permita sua lombar envergar, pois isso causará lesões. Seus pés ficarão na distância de um agachamento padrão.",
    },
  ],
  [{
    typeTreino: "Quadríceps",
    title: "Agachamento Livre",
    src: "https://dicasdemusculacao.org/wp-content/uploads/2013/12/agachamento-livre.png",
    subTitle: "O melhor exercícios para pernas..",
  text:"Firme os pés, principalmente o calcanhar no chão, agache até sua perna fazer um ângulo de 90 graus, não deixe sua lombar envergar nem incline tanto suas costas para frente, lembre-se também de nunca deixar os joelhos para dentro. uma boa dica é apoiar a barra no trapézio."
},
  {
    title: "tríceps francês testa",
    src: "https://images.pexels.com/photos/4608158/pexels-photo-4608158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subTitle: "Um ótimo exercício para a cabeça longa do tríceps.",
    text: "Ache uma polia, coloque o equipamento de sua preferência, como por exemplo a corda, fixe os cotovelos ao tronco e empurre o equipamento para baixo, deixando a corda 90° em relação ao seu ponto de origem. Não se esqueça de estufar o peito e retrair as escápulas. Firme os pés no chão de preferência um a frente do outro.",
  },
  {
    title: "Supino Fechado",
    src: "https://www.mundoboaforma.com.br/wp-content/uploads/2022/01/supino-triceps.jpg",
    subTitle: "Este é um dos melhores exercícios para a cabeça medial.",
    text: "Deixe o banco reto, retraia as escápulas assim como é feito no supino tradicional, firme os pés. Na fase concentrica do exercício não estique totalmente o braço para manter uma maior tensão sobre o músculo. Se puder fazer com halteres será bem melhor.",
  },],
  [
    {
      typeTreino: "TRÍCEPS",
      title: "Tríceps Francês",
      src: "https://fitnessvolt.com/wp-content/uploads/2021/12/French-Press.jpg",
      subTitle: "Alguns estudos mostram que este exercício é o melhor para o tríceps em geral.",
    text:"Basicamente, o tríceps francês pode ser feito tanto com barra ou halteres e até mesmo na polia com um auxílio de uma corda com participação estática dos músculos do ombro e do tronco.O movimento articular é uma extensão de cotovelo, que tem como motor primário, o complexo muscular do tríceps. Neste movimento, temos a solicitação das 3 cabeças do tríceps (média, curta e longa)."
  },
    {
      title: "tríceps francês testa",
      src: "https://images.pexels.com/photos/4608158/pexels-photo-4608158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subTitle: "Um ótimo exercício para a cabeça longa do tríceps.",
      text: "Ache uma polia, coloque o equipamento de sua preferência, como por exemplo a corda, fixe os cotovelos ao tronco e empurre o equipamento para baixo, deixando a corda 90° em relação ao seu ponto de origem. Não se esqueça de estufar o peito e retrair as escápulas. Firme os pés no chão de preferência um a frente do outro.",
    },
    {
      title: "Supino Fechado",
      src: "https://www.mundoboaforma.com.br/wp-content/uploads/2022/01/supino-triceps.jpg",
      subTitle: "Este é um dos melhores exercícios para a cabeça medial.",
      text: "Deixe o banco reto, retraia as escápulas assim como é feito no supino tradicional, firme os pés. Na fase concentrica do exercício não estique totalmente o braço para manter uma maior tensão sobre o músculo. Se puder fazer com halteres será bem melhor.",
    },
  ]
];
export default treinos;
