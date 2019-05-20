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
sim.model.title = "两个连续服务的网络流程模型";
sim.model.systemNarrative = "机动车部的客户首先必须在接待处排队，以便记录他们的请求。 然后他们必须等待一个能处理他们案件的职员。";
sim.model.shortDescription = "接待台和案例处理台都被建模为处理网络内的处理节点（具有输入队列），该处理网络具有用于到达和离开的客户的入口节点和出口节点。 该模型基于预定义的OES处理网络概念eNTRYnODE，pROCESSINGnODE和eXITnODE，使得工作对象通过在入口节点处的到达事件输入，然后传递一个或多个处理节点来“流过系统”。 参与他们的处理活动，最后通过退出节点离开它。 模拟场景只是实例化一个入口节点，两个处理节点（'receptDesk'和'caseDesk'）和一个出口节点。";
// meta data
sim.model.creator = "Gerd Wagner教授";

