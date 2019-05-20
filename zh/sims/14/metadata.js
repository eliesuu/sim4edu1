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
sim.model.name = "服务前台-0（ServiceDesk-0）";
sim.model.title = "具有队列长度统计的服务队列模型";
sim.model.systemNarrative = "当服务台忙时，到达服务台的客户必须排队等候。 否则，当队列为空并且服务台不忙时，服务人员会立即为它们提供服务。 每当服务完成时，服务的客户就会离开，并且将从队列中的下一个客户（如果有的话）提供服务。";
sim.model.shortDescription = "具有两个统计信息的服务队列模型（一个服务和一个队列）：最大队列长度和平均队列长度。 该模型从个体客户和队列的组成中抽象出来，队列的组成仅以其长度表示为全局变量'queueLength'的值。 该模型包括两种事件类型：CustomerArrival和CustomerDeparture。";
sim.model.creator = "Gerd Wagner教授";

