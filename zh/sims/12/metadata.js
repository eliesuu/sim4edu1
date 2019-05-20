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
sim.model.name = "服务前台-4（ServiceDesk-4）";
sim.model.title = "一个服务前台的网络处理模型";
sim.model.systemNarrative = "当服务台忙时，到达服务台（或服务站）的客户必须排队等候。 否则，当队列为空并且服务台不忙时，服务人员会立即为它们提供服务。 每当服务完成时，服务的客户就会离开，并且将从队列中的下一个客户（如果有的话）提供服务。";
sim.model.shortDescription = "服务台被建模为处理网络的处理节点，该处理网络具有用于到达和离开的客户的入口节点和出口节点。 该模型基于预定义的处理网络概念eNTRYnODE，pROCESSINGnODE和eXITnODE，使得工作对象通过入口节点处的到达事件输入，然后在参与时传递一个或多个处理节点，从而流经系统。 他们的处理活动，最后通过出口节点的离开事件。 模拟场景只是实例化一个入口节点，一个处理节点（'serviceDesk'）和一个出口节点。";
sim.model.creator = "Gerd Wagner教授";

