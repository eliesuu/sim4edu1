var sim = sim || {};
sim.model = sim.model || {};
sim.scenario = sim.scenario || {};
sim.config = sim.config || {};

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.explanation = {};

/*******************************************************
 Simulation Model
********************************************************/
sim.model.name = "伦尼克基准线经济模拟（LengnickBaselineEconomy-1）";
sim.model.title = "伦尼克基准线经济模拟";
sim.model.systemNarrative =
    "<p>伦尼克基准线经济模拟（LBE）仅由两类经济参与者组成：家庭扮演工人/雇员和消费者的角色，公司扮演雇主和生产者/供应者的角色。所有公司都生产和销售由家庭购买（和消费）的相同抽象消费品。</p>" +
    "<p>LBE代表着没有增长的经济体系。家庭和企业的数量是固定的（既没有人口增长也没有收缩）。家庭不会因饥饿而死亡。当他们的收入减少时，他们通过减少消费来适应。公司不会破产。当他们的流动性减少时，他们会通过削减工资来适应。</p>" +
    "<p>每天生产和购买消费品，而每月购买劳动力。家庭只从有限数量的公司购买消费品，这些公司是他们的首选供应商，他们不断更新。消费支出随个人财富增加而增加，但处于衰退状态。家庭最多雇用一家公司，即雇主。他们不断寻找支付更高工资的雇主。</p>";
sim.model.shortDescription =
    "LBE模型基于离散时间，以天为单位。 一个月包含一个StartOfMonth事件，后跟21个EveryDay事件，表示一个月中连续21个工作日，后面跟一个EndOfMonth事件。 除了这三种事件类型之外，模型还包括两种对象类型Household和Firm。 在一个月初，公司调整他们的工资率和消费品价格以及他们的雇员数量，而家庭搜索更便宜的供应商和工作（如果失业）或更好的工作（如果雇用），以及 决定他们的每月消费预算。 每天，家庭购买消费品，企业根据工人数量生产新的消费品。 在一个月末，公司分配利润，支付工资，并决定解雇工人。 家庭收到工资并可能调整他们的预留工资。";
sim.model.source =
    "<a href='https://doi.org/10.1016/j.jebo.2012.12.021'>代理人的宏观经济学；一个基准线模型</a> 由 M. Lengnick, 发表于 " +
    "<em>Journal of Economic Behavior &amp; Organization</em>, " +
    "vol. 86, 2013.";
sim.model.creator = "Luis Gustavo Nardin博士";
sim.model.contributors = "Gerd Wagner教授";
