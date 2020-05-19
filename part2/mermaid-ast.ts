/*      MERMAID      */
// <graph> ::= <header> <graphContent> // Graph(dir: Dir, content: GraphContent)
// <header> ::= graph (TD|LR)<newline> // Direction can be TD or LR
// <graphContent> ::= <atomicGraph> | <compoundGraph>
// <atomicGraph> ::= <nodeDecl>
// <compoundGraph> ::= <edge>+
// <edge> ::= <node> --><edgeLabel>? <node><newline> // <edgeLabel> is optional
// // Edge(from: Node, to: Node, label?: string)
// <node> ::= <nodeDecl> | <nodeRef>
// <nodeDecl> ::= <identifier>["<string>"] // NodeDecl(id: string, label: string)
// <nodeRef> ::= <identifier> // NodeRef(id: string)
// <edgeLabel> ::= |<identifier>| // string

export type GraphContent = AtomicGraph | CompoundGraph;
export type Node = NodeDecl | NodeRef;
export type Dir = TD | LR;
export interface TD{tag:"TD"}
export interface LR{tag:"LR"}
export interface Graph {tag:"Graph"; dir: Dir ; content: GraphContent}
export interface AtomicGraph{tag: "AtomicGraph" ;nodeDecl: NodeDecl};
export interface CompoundGraph{tag:"CompoundGraph", edges: Edge[]}
export interface Edge{tag:"Edge"; parent: Node ;  child: Node; lable?: EdgeLable}
export interface NodeDecl{tag:"NodeDecl"; id: string; lable: string}
export interface NodeRef{tag:"NodeRef"; id:string}
export interface EdgeLable{tag:"EdgeLable"; id:string}
export const makeTD = (): TD => ({tag:"TD"});
export const makeLR = (): LR => ({tag:"LR"});
export const makeGraph = (dir: Dir , content: GraphContent): Graph => ({tag:"Graph" , dir:dir , content:content});
export const makeAtomicGraph = (nodeDecl: NodeDecl): AtomicGraph => ({tag:"AtomicGraph", nodeDecl: nodeDecl});
export const makeCompundGraph = (edges: Edge[]): CompoundGraph => ({tag:"CompoundGraph",edges:edges});
export const makeEdge = (parent: Node, child: Node, lable?: EdgeLable): Edge => ({tag:"Edge", parent:parent, child:child, lable:lable});
export const makeNodeDecl = (id: string, lable: string): NodeDecl => ({tag:"NodeDecl", id: id, lable: lable});
export const makeNodeRef = (id:string): NodeRef => ({tag:"NodeRef", id:id});
export const makeEdgeLable = (id:string): EdgeLable=> ({tag:"EdgeLable", id:id});


export const isGraph = (x : any): x is Graph=> x.tag == "Graph";
export const isTD = (x: any): x is TD => x.tag == "TD";
export const isLR = (x: any) => x.tag == "LR";
export const isAtomicGraph = (x: any) => x.tag == "AtomicGraph";
export const isCompundGraph = (x: any) => x.tag == "CompundGraph";
export const isNodeDecl = (x: any) => x.tag == "NodeDecl";
export const isNodeRef = (x: any) => x.tag == "NodeRef";
export const isEdge = (x: any) => x.tag == "Edge";
export const isEdgeLable = (x: any) => x.tag == "EdgeLable";