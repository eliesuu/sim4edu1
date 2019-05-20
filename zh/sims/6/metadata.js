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
sim.model.name = "谢林分离模型-1(SchellingSegregationModel-1)";
sim.model.title = "谢林分离模型";
sim.model.systemNarrative = "住宅隔离是由于居民作为某个社会群体成员的行为造成的，如果它包含足够数量的同一群体的居民，并且由于存不满在而搬到另一个地方，则根据事实对其邻居有满足或不满意。住宅区由属于某一群体的居民居住。 所有居民都会根据他们对不同群体的容忍程度，定期检查他们是否满意他们的邻居。 如果不是，则移动到他们满意的位置，或者如果他们找不到这样的位置，则离开该区域。";
sim.model.shortDescription = "在模拟模型中，作为模拟空间的住宅区由整数网格（整数值的二维阵列）表示，其中“邻域”被定义为由围绕单元的8个相邻单元组成。 单元格的整数值表示占用它的居民的组/类型。";
sim.model.creator = "Gerd Wagner教授";

