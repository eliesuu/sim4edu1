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
sim.model.name = "柠檬状态-2（LemonadeStand-2）";
sim.model.title = "一个受天气支配的制造公司在垄断市场的柠檬状态";
sim.model.systemNarrative = "柠檬状态必须通过持续或定期审查政策的库存管理来处理经常延迟交货（柠檬，糖等）。 它的市场条件主要是天气：阳光和温暖越多，对柠檬水的需求就越高。";
sim.model.shortDescription = "该模型通过实施输入项目的补货政策来修改和扩展柠檬状态-1（LemonadeStand-1）模型，要求将每日汇总交货事件替换为每个输入项目的提前期延迟交货事件，并实施由天气主导的市场条件。";
sim.model.creator = "Gerd Wagner教授";
sim.model.contributors = "许可";

