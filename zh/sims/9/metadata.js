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
sim.model.name = "连续服务-1（ConsecutiveServices-1）";
sim.model.title = "一个基于活动的连续服务模型";
sim.model.systemNarrative = "处于机动车部门的客户首先须在接待处排队，以便记录他们的请求。 然后他们必须等待一个能处理他们案件的职员。";
sim.model.shortDescription = "接收和案例处理都被建模为具有等待线路的服务提供商，从而产生具有队列的两个连续服务的模型。 对于两个服务提供商，利用率统计信息由模拟器自动计算。 该模型包括两个对象类型：ServiceProvider和Customer，一个事件类型：CustomerArrival，以及一个活动类型：Service，它由接收服务和案例处理服务实例化。";
// meta data
sim.model.creator = "Gerd Wagner教授";
