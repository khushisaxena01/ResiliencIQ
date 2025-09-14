import React, { useState, useEffect, useRef } from 'react';
import {Shield, TrendingUp, AlertTriangle,Users,Activity,Globe,Settings,Bell,ChevronDown,Play,Pause,RotateCcw,Eye,
  User,Home,BarChart3,Zap,Target,Database,Wifi,WifiOff,CheckCircle,XCircle,Clock,AlertCircle,TrendingDown,FileText
} from 'lucide-react';

import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,AreaChart,Area,BarChart,Bar
} from 'recharts';
import * as d3 from 'd3';

function App() {
  const [currentUser] = useState({ name: 'Khushi Saxena', role: 'Executive' });
  const [isConnected, setIsConnected] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const d3ContainerRef = useRef(null);

  // Sample data matching your Figma design
  const systemMetrics = {
    riskScore: { value: 68, change: -2.3, trend: 'down' },
    systemUptime: { value: 99.8, change: 0.2, trend: 'up' },
    activeSimulations: { value: 24, change: 12.5, trend: 'up' },
    connectedSMEs: { value: 147, change: 6.3, trend: 'up' }
  };

  const systemHealth = [
    { name: 'API Gateway', value: 78, status: 'healthy', load: '2.4K req/min' },
    { name: 'Database Cluster', value: 95, status: 'healthy', load: 'Query time: 35ms avg' },
    { name: 'Cloud Infrastructure', value: 86, status: 'warning', load: 'High load detected' },
    { name: 'Network Latency', value: 43, status: 'healthy', load: '12ms response time' },
    { name: 'Storage Systems', value: 71, status: 'healthy', load: '2.1TB available' },
    { name: 'Processing Units', value: 95, status: 'critical', load: 'CPU throttling active' }
  ];

  const realtimeStreams = [
    { name: 'Port of Shanghai', value: 14065, change: 3.5, status: 'active' },
    { name: 'European Rail Network', value: 9837, change: -1.3, status: 'active' },
    { name: 'North American Freight', value: 12190, change: 5.0, status: 'active' },
    { name: 'Southeast Asia Maritime', value: 7253, change: 2.3, status: 'active' }
  ];

  const forecasts = [
    { risk: 'Supply Chain Disruption', severity: 'MEDIUM', confidence: 67.67, timeline: '7-14 days' },
    { risk: 'Market Volatility', severity: 'HIGH', confidence: 89.13, timeline: '3-5 days' },
    { risk: 'Compliance Risk', severity: 'MEDIUM', confidence: 65.54, timeline: '21-30 days' },
    { risk: 'Weather Impact', severity: 'HIGH', confidence: 89.62, timeline: '2-3 days' }
  ];

  const complianceAlerts = [
    { type: 'GDPR Compliance Violation', severity: 'regulatory', time: '2 minutes ago', description: 'Data retention policy exceeded for customer records in EU region' },
    { type: 'Supplier Audit Overdue', severity: 'operational', time: '15 minutes ago', description: 'Annual compliance audit for TechCorp supplier is 30 days overdue' },
    { type: 'Financial Disclosure Alert', severity: 'financial', time: '1 hour ago', description: 'Quarterly risk disclosure deadline approaching in 3 days' },
    { type: 'Security Certificate Expiry', severity: 'operational', time: '2 hours ago', description: 'SSL certificate for payment gateway expires in 7 days' }
  ];

  const recentActivities = [
    { type: 'simulation', title: 'Supply Chain Shock Simulation Completed', user: 'SIM', time: '2 min ago', status: 'completed', details: 'Pacific route disruption scenario analyzed with 89% confidence' },
    { type: 'alert', title: 'New Compliance Alert Generated', user: 'ALT', time: '5 min ago', status: 'new', details: 'GDPR data retention policy violation detected in EU region' },
    { type: 'update', title: 'Risk Assessment Updated', user: 'UPD', time: '12 min ago', status: 'updated', details: 'Manufacturing risk score adjusted from Medium to High' },
    { type: 'system', title: 'Automated Backup Completed', user: 'SYS', time: '23 min ago', status: 'completed', details: 'Daily system backup and integrity check successful' },
    { type: 'report', title: 'Regulatory Report Submitted', user: 'EMP', time: '1 hour ago', status: 'submitted', details: 'Q3 financial risk disclosure submitted to authorities' },
    { type: 'system', title: 'Cyber Security Drill Initiated', user: 'SIM', time: '1 hour ago', status: 'active', details: 'Testing response protocols for data breach scenarios' },
    { type: 'alert', title: 'Supplier Audit Overdue', user: 'ALT', time: '2 hours ago', status: 'overdue', details: 'TechCorp compliance audit is 30 days past due date' }
  ];

  const forecastChartData = [
    { month: 'Jan', risk: 40, confidence: 85 },
    { month: 'Feb', risk: 65, confidence: 78 },
    { month: 'Mar', risk: 55, confidence: 82 },
    { month: 'Apr', risk: 72, confidence: 88 },
    { month: 'May', risk: 68, confidence: 86 },
    { month: 'Jun', risk: 68, confidence: 69 }
  ];

  // D3 Network Visualization Effect
  useEffect(() => {
    if (d3ContainerRef.current) {
      const svg = d3.select(d3ContainerRef.current);
      svg.selectAll("*").remove();

      const width = 600;
      const height = 350;
      
      const nodes = [
        { id: 'raw-materials', name: 'Raw Materials', x: 100, y: 175, color: '#2dd4bf', risk: 'low' },
        { id: 'components', name: 'Components', x: 200, y: 100, color: '#f59e0b', risk: 'medium' },
        { id: 'assembly', name: 'Assembly', x: 300, y: 175, color: '#2dd4bf', risk: 'low' },
        { id: 'warehouse', name: 'Warehouse', x: 400, y: 100, color: '#ef4444', risk: 'high' },
        { id: 'electronics', name: 'Electronics', x: 200, y: 250, color: '#2dd4bf', risk: 'low' },
        { id: 'logistics', name: 'Logistics', x: 400, y: 250, color: '#2dd4bf', risk: 'low' },
        { id: 'retail', name: 'Retail', x: 500, y: 175, color: '#2dd4bf', risk: 'low' }
      ];

      const links = [
        { source: 'raw-materials', target: 'assembly' },
        { source: 'components', target: 'assembly' },
        { source: 'electronics', target: 'assembly' },
        { source: 'assembly', target: 'warehouse' },
        { source: 'assembly', target: 'logistics' },
        { source: 'warehouse', target: 'retail' },
        { source: 'logistics', target: 'retail' }
      ];

      svg.attr('width', width).attr('height', height);

      // Add links
      svg.append('g')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('x1', d => nodes.find(n => n.id === d.source).x)
        .attr('y1', d => nodes.find(n => n.id === d.source).y)
        .attr('x2', d => nodes.find(n => n.id === d.target).x)
        .attr('y2', d => nodes.find(n => n.id === d.target).y)
        .attr('stroke', '#64748b')
        .attr('stroke-width', 2)
        .attr('opacity', 0.7);

      // Add nodes
      const nodeGroup = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', d => `translate(${d.x},${d.y})`);

      nodeGroup
        .append('circle')
        .attr('r', 20)
        .attr('fill', d => d.color)
        .attr('stroke', '#1e293b')
        .attr('stroke-width', 2);

      nodeGroup
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', 35)
        .attr('fill', '#e2e8f0')
        .attr('font-size', '12px')
        .text(d => d.name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      {/* Header */}
      <header className="bg-dark-800/70 backdrop-blur-xl border-b border-dark-700/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">ResilienceIQ</h1>
                <p className="text-xs text-gray-400">Enterprise Risk Intelligence</p>
              </div>
            </div>
            
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
              isConnected ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
              <span>System Online</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Last Updated: 6:50:40 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium">{currentUser.name}</span>
              </div>
              <button className="flex items-center space-x-2 px-3 py-1 text-sm bg-dark-700 rounded-lg hover:bg-dark-600">
                <span>{currentUser.role}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-dark-800/50 backdrop-blur-xl border-r border-dark-700/50 py-6">
          <div className="flex flex-col items-center space-y-6">
            {[
              { icon: Home, id: 'dashboard', active: true },
              { icon: BarChart3, id: 'analytics' },
              { icon: Zap, id: 'monitoring' },
              { icon: Target, id: 'simulation' },
              { icon: Globe, id: 'network' },
              { icon: Settings, id: 'settings' }
            ].map((item) => (
              <button
                key={item.id}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  item.active 
                    ? 'bg-primary-400/20 text-primary-400 border border-primary-400/30' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {[
              { 
                label: 'Risk Score', 
                value: `${systemMetrics.riskScore.value}%`, 
                change: `${systemMetrics.riskScore.change}%`,
                trend: systemMetrics.riskScore.trend,
                icon: Shield,
                description: 'vs last month'
              },
              { 
                label: 'System Uptime', 
                value: `${systemMetrics.systemUptime.value}%`, 
                change: `${systemMetrics.systemUptime.change}%`,
                trend: systemMetrics.systemUptime.trend,
                icon: Activity,
                description: 'vs last quarter'
              },
              { 
                label: 'Active Simulations', 
                value: systemMetrics.activeSimulations.value, 
                change: `${systemMetrics.activeSimulations.change}%`,
                trend: systemMetrics.activeSimulations.trend,
                icon: Zap,
                description: 'this week'
              },
              { 
                label: 'Connected SMEs', 
                value: systemMetrics.connectedSMEs.value, 
                change: `${systemMetrics.connectedSMEs.change}%`,
                trend: systemMetrics.connectedSMEs.trend,
                icon: Users,
                description: 'active users'
              }
            ].map((metric, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-primary-400" />
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-400' : 
                    metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
                    {metric.trend === 'down' && <TrendingDown className="w-4 h-4 mr-1" />}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Global Supply Chain */}
            <div className="col-span-7 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Global Supply Chain</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-gray-400">Healthy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span className="text-gray-400">Warning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <span className="text-gray-400">Critical</span>
                    </div>
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium">
                    Simulate Shock
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Network Health: 67%</div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div className="progress-bar w-2/3 rounded-full"></div>
                </div>
              </div>

              <div className="bg-dark-700/30 rounded-lg p-4">
                <svg ref={d3ContainerRef} className="w-full"></svg>
              </div>
            </div>

            {/* System Health */}
            <div className="col-span-5 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">System Health</h3>
                <div className="text-2xl font-bold text-warning">80%</div>
              </div>
              
              <div className="space-y-4">
                {systemHealth.map((system, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        system.status === 'healthy' ? 'bg-green-400/20 text-green-400' :
                        system.status === 'warning' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-red-400/20 text-red-400'
                      }`}>
                        {system.status === 'healthy' && <CheckCircle className="w-4 h-4" />}
                        {system.status === 'warning' && <AlertTriangle className="w-4 h-4" />}
                        {system.status === 'critical' && <XCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{system.name}</div>
                        <div className="text-xs text-gray-400">{system.load}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium">{system.value}%</div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        system.status === 'healthy' ? 'bg-green-400/20 text-green-400' :
                        system.status === 'warning' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-red-400/20 text-red-400'
                      }`}>
                        {system.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {/* Real-Time Data Streams */}
            <div className="col-span-4 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Real-Time Data Streams</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                {realtimeStreams.map((stream, index) => (
                  <div key={index} className="bg-dark-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-primary-400" />
                        <span className="text-sm font-medium">{stream.name}</span>
                      </div>
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded font-medium">
                        ACTIVE
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stream.value.toLocaleString()}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Updated 6:26:13 PM</span>
                      <div className={`flex items-center text-xs ${
                        stream.change > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stream.change > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        <span>{stream.change > 0 ? '+' : ''}{stream.change}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm text-gray-400">Total Active Streams</div>
                <div className="text-2xl font-bold text-primary-400">44</div>
              </div>
            </div>

            {/* AI Forecasting Engine */}
            <div className="col-span-4 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">AI Forecasting Engine</h3>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="text-sm">Processing</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">2,481,419</div>
                  <div className="text-xs text-gray-400">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <div className="text-xs text-gray-400">Models Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">88.3%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300">Active Predictions</h4>
                {forecasts.map((forecast, index) => (
                  <div key={index} className="bg-dark-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{forecast.risk}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded font-medium ${
                        forecast.severity === 'HIGH' ? 'bg-red-400/20 text-red-400' : 'bg-yellow-400/20 text-yellow-400'
                      }`}>
                        {forecast.severity}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs text-gray-400 mb-1">Confidence</div>
                      <div className="w-full bg-dark-600 rounded-full h-1">
                        <div 
                          className="bg-primary-400 h-1 rounded-full" 
                          style={{ width: `${forecast.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Timeline: {forecast.timeline}</span>
                      <span>Accuracy: {forecast.confidence.toFixed(2)}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center text-xs text-gray-400">
                Last model update: 6:28:14 PM
              </div>
            </div>

            {/* Interactive Simulation Models */}
            <div className="col-span-4 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Interactive Simulation Models</h3>
                <Zap className="w-5 h-5 text-primary-400" />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Select Simulation Scenario</label>
                <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-sm">
                  <option>Choose a scenario to simulate...</option>
                  <option>Supply Chain Disruption</option>
                  <option>Port Closure Impact</option>
                  <option>Currency Fluctuation</option>
                  <option>Natural Disaster</option>
                  <option>Cyber Attack</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Impact Severity: 75%</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="75" 
                    className="w-full accent-primary-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Simulation Speed: 50%</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="50" 
                    className="w-full accent-primary-400"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Start Simulation</span>
                </button>
                <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium">
                  <Pause className="w-4 h-4" />
                </button>
                <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-dark-700/30 rounded-lg p-4 text-center">
                <Target className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <div className="text-sm text-gray-400 mb-1">Ready to Simulate</div>
                <div className="text-xs text-gray-500">Configure parameters and run scenario</div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {/* Compliance Alerts */}
            <div className="col-span-6 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Compliance Alerts</h3>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-red-400/20 text-red-400 text-xs rounded font-medium">2 New</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded font-medium">2 In Review</span>
                  <button className="text-sm text-primary-400 hover:text-primary-300">View All</button>
                </div>
              </div>

              <div className="space-y-4">
                {complianceAlerts.map((alert, index) => (
                  <div key={index} className="bg-dark-700/30 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{alert.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded font-medium ${
                          alert.severity === 'regulatory' ? 'bg-red-400/20 text-red-400' :
                          alert.severity === 'operational' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-blue-400/20 text-blue-400'
                        }`}>
                          {alert.severity}
                        </span>
                        <button className="text-xs text-gray-400 hover:text-white">
                          {alert.severity === 'regulatory' ? 'new' : 'reviewing'}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{alert.description}</p>
                    <div className="text-xs text-gray-400">{alert.time}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400">3</div>
                  <div className="text-xs text-gray-400">Critical</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">7</div>
                  <div className="text-xs text-gray-400">Medium Risk</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <div className="text-xs text-gray-400">Info</div>
                </div>
              </div>
            </div>

            {/* SME Forecast */}
            <div className="col-span-3 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">SME Forecast</h3>
                <div className="flex items-center space-x-2 text-red-400">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm">-3.0%</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <button className="px-3 py-1 bg-primary-400/20 text-primary-400 text-sm rounded font-medium">1M</button>
                <button className="px-3 py-1 bg-primary-400 text-white text-sm rounded font-medium">6M</button>
                <button className="px-3 py-1 text-gray-400 text-sm rounded hover:bg-dark-700">1Y</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-dark-700/30 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-green-400">68%</div>
                  <div className="text-xs text-gray-400">Current Risk Score</div>
                </div>
                <div className="bg-dark-700/30 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-blue-400">70%</div>
                  <div className="text-xs text-gray-400">AI Confidence</div>
                </div>
              </div>

              <div className="h-32 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={forecastChartData}>
                    <defs>
                      <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="risk" 
                      stroke="#2dd4bf" 
                      strokeWidth={2}
                      fill="url(#riskGradient)" 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.95)', 
                        border: '1px solid rgba(71, 85, 105, 0.3)',
                        borderRadius: '8px'
                      }} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Top Risk Factors</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supply Chain Disruption</span>
                    <span className="text-red-400">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Regulatory Changes</span>
                    <span className="text-yellow-400">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Volatility</span>
                    <span className="text-yellow-400">Medium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="col-span-3 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Activities</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm">Live</span>
                </div>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      activity.type === 'simulation' ? 'bg-blue-400/20 text-blue-400' :
                      activity.type === 'alert' ? 'bg-red-400/20 text-red-400' :
                      activity.type === 'update' ? 'bg-yellow-400/20 text-yellow-400' :
                      activity.type === 'system' ? 'bg-green-400/20 text-green-400' :
                      'bg-purple-400/20 text-purple-400'
                    }`}>
                      {activity.user}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium mb-1">{activity.title}</div>
                      <div className="text-xs text-gray-400 mb-1">{activity.details}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <span className={`px-2 py-0.5 text-xs rounded font-medium ${
                          activity.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                          activity.status === 'new' ? 'bg-red-400/20 text-red-400' :
                          activity.status === 'updated' ? 'bg-yellow-400/20 text-yellow-400' :
                          activity.status === 'active' ? 'bg-blue-400/20 text-blue-400' :
                          activity.status === 'submitted' ? 'bg-purple-400/20 text-purple-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center space-x-6 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">3</div>
                  <div className="text-xs text-gray-400">Success</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-400">1</div>
                  <div className="text-xs text-gray-400">Warning</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-400">1</div>
                  <div className="text-xs text-gray-400">Error</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">1</div>
                  <div className="text-xs text-gray-400">Info</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
