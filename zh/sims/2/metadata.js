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
sim.model.name = "服务前台-2（ServiceDesk-2）";
sim.model.title = "一个具有均值响应时间统计的连续时间服务队列模型";
sim.model.systemNarrative = "当服务台忙时，到达服务台的客户必须排队等候。 否则，当队列为空并且服务台不忙时，服务人员会立即为它们提供服务。 每当服务完成时，服务的客户就会离开，并且将从队列中的下一个客户（如果有的话）提供服务。";
sim.model.shortDescription = "具有连续时间和统计数据的服务队列模型（一个服务和一个队列）：平均响应时间，即客户从到达到离开时在系统中花费的平均时间长度。 为了记录它们的到达时间，单个客户在waitingCustomers队列中明确表示。 该模型包括两种对象类型：ServiceDesk和Customer，以及两种事件类型：CustomerArrival和CustomerDeparture。";

sim.model.license = "CC BY-NC";
sim.model.creator = "Gerd Wagner教授";
sim.model.created = "2016-09-30";
sim.model.modified = "2016-10-01";
