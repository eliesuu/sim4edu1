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
sim.model.name = "服务桌面-3（ServiceDesk-3）";
sim.model.title = "一个基于事件的服务排队模拟仿真模型";
sim.model.systemNarrative = "当服务台忙时，到达服务台（或服务站）的客户必须排队等候。 否则，当队列为空并且服务台不忙时，服务人员会立即为它们提供服务。 每当服务完成时，服务的客户就会离开，并且将从队列中的下一个客户（如果有的话）提供服务。 " ;
sim.model.shortDescription = "服务队列模型，其中服务被建模为以服务台作为其资源的活动，其自动计算利用率统计信息。 该模型包括一个对象类型：ServiceDesk，一个事件类型：CustomerArrival和一个活动类型：PerformService。";
sim.model.creator = "Gerd Wagner教授";

