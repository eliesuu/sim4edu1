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
sim.model.name = "三台机器故障连续制造工作站-1（ThreeConsecutiveWorkstations-1）";
sim.model.title = "三台机器故障连续制造工作站";
sim.model.systemNarrative = "制造公司使用三个连续工作站的装配线。";
sim.model.shortDescription = "网络流程模型，其定义用于到达部件的入口节点，表示制造工作站的三个连续处理节点，以及用于离开产品的出口节点。";
sim.model.creator = "Gerd Wagner教授";
