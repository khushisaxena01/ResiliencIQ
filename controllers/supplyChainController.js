const getSupplyChainGraph = async (req, res) => {
  // Placeholder: Simulate supply chain dependency graph
  const graph = {
    nodes: [
      { id: 'supplier1', label: 'Supplier A' },
      { id: 'supplier2', label: 'Supplier B' },
      { id: 'factory', label: 'Factory' },
    ],
    edges: [
      { from: 'supplier1', to: 'factory' },
      { from: 'supplier2', to: 'factory' },
    ],
  };
  res.json(graph);
};

const simulateDisruption = async (req, res) => {
  // Placeholder: Simulate shock scenario
  const { scenario } = req.body;
  const impact = {
    scenario,
    affectedNodes: ['factory'],
    riskLevel: 'high',
  };
  res.json(impact);
};

module.exports = {
  getSupplyChainGraph,
  simulateDisruption,
};
