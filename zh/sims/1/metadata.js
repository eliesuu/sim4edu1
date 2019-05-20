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
sim.model.name = "服务前台-1（ServiceDesk-1）";
sim.model.title = "具有利用率和最大队列长度统计的单服务前台排队系统模型";
sim.model.systemNarrative = "当服务台忙时，到达服务台的客户必须排队等候。 否则，当队列为空并且服务台不忙时，服务人员会立即为它们提供服务。 每当服务完成时，服务的客户就会离开，并且将从队列中的下一个客户（如果有的话）提供服务。";
sim.model.shortDescription = "具有两个统计信息的服务队列模型（一个服务和一个队列）：最大队列长度和服务利用率。 为简单起见，该模型使用抽象（离散）时间和远离单个客户以及队列组成的摘要，该组成仅以其长度表示。 该模型包括一个对象类型：ServiceDesk和两种事件类型：CustomerArrival和CustomerDeparture。 用于客户到达事件重现的随机时间变量和用于对服务持续时间建模的随机时间变量都是离散的。";
sim.model.creator = "Gerd Wagner教授";

