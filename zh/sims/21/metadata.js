/*******************************************************************************
 * Mafia simulation model metadata information
 * 
 * @copyright Copyright 2017-2018 Brandenburg University of Technology, Germany
 * @license The MIT License (MIT)
 * @author Luis Gustavo Nardin
 * @author Gerd Wagner
 * @author Jakub Lelo
 ******************************************************************************/
var sim = sim || {};
sim.model = sim.model || {};
sim.scenario = sim.scenario || {};
sim.config = sim.config || {};

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.explanation = {};

/*******************************************************************************
 * Simulation Model
 ******************************************************************************/
sim.model.name = "黑手党-1(Mafia-1)";
sim.model.title = "黑手党交易保护";
sim.model.systemNarrative =
    "<p>世界各地的犯罪组织都出售保护：拉美团伙，日本Yakuza，俄罗斯黑手党以及在意大利经营的主要黑手党组织：西西里黑手党称为Cosa Nostra，普利亚的Sacra Corona Unita，卡拉布里亚的Ndrangheta， 和坎帕尼亚的卡莫拉。 </p> " +
    "<p>其中一些团体提供真正的保护措施，阻止小偷和其他犯罪分子利用业务，而其他人则实行纯粹的敲诈勒索，只提供不伤害他们的“客户”。 </p>"
        + "<p>交易保护 以多种方式损害其运作的社会和经济。 他们通过获取资源，提供很少的回报，并对拒绝支付他们的人施加暴力，来伤害他们所敲诈的人。 甚至提供真正保护的团体也可以促进非法交易，并允许存在非法且经常有害的商品和服务的市场。 他们还可能在企业中强制执行卡特尔，增加成本并伤害消费者。</p>"
sim.model.shortDescription =
    "<p>该模型定义了四种对象类型：客户，企业家，黑手党和国家。企业家代表从事生产和销售产品或服务的企业主。他们作出了若干决定：（i）如果与黑手党接洽，是否支付保护费，（ii）向国家报告保护费请求，（iii）报告黑手党对国家的惩罚。 </p> "
        + "<p>国家代表负责执行反索赔法的机构。它由一组警察组成，可以根据一般调查或特定调查监禁黑手党，这些调查更有可能成功。在警察捕获黑手党后，他们可能会找到有关向该黑手党支付保护费的企业家的信息。然后，国家可以利用这些证据来引起这些企业家的合作。如果获得合作，国家使用收集的信息起诉该黑手党。国家还可以为遭受黑手党惩罚损害的企业家提供财政支持。</p>"
        + "<p>黑手党代表一个覆盖社区的家庭，由黑手党组成，（i）要求企业家提供保护费，（ii）为付费企业家提供保护，以及（iii）惩罚非付费企业家。由于他们是同一个家庭的一部分，他们协调行动。如果企业家接受或拒绝了保护费请求，他们自己决定，但他们做出的每一个决定都会产生后果，无论好坏。如果企业家不付钱，他们将受到惩罚，例如，通过销毁他们的库存。 </p>"
sim.model.source =
    "L.G. Nardin, G. Andrighetto, R. Conte, Á. Székely, D. Anzola, C. Elsenbroich, U. Lotzmann, "
        + "M. Neumann, V. Punzo and K.G. Troitzsch. 2016. <a href='https://dx.doi.org/10.1007%2fs10458-016-9330-z'>模拟 "
        + "交易保护: 一个关于西西里黑手党的研究案例</a>. <i>Journal of Autonomous Agents and Multi-Agent Systems</i>. "
        + "30(6):1117-1147.";
sim.model.creator = "Jakub Lelo, Luis Gustavo Nardin 博士, Gerd Wagner 教授";

