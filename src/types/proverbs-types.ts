export interface ProverbsVerse {
  verseNumber: number;
  text: string;
}

export interface LinguisticTerm {
  termEs: string;
  termHe: string;
  termHeTranslit: string;
  strongHe: string;
  termGr?: string;
  termGrTranslit?: string;
  strongGr?: string;
  description: string;
}

export interface SemanticNode {
  id: string;
  label: string;
  description?: string;
}

export interface SemanticEdge {
  from: string;
  to: string;
  label?: string;
}

export interface SemanticNetworkData {
  nodes: SemanticNode[];
  edges: SemanticEdge[];
  visualizationText: string;
}

export interface NarrativeStage {
  title: string;
  verses: string;
  description: string;
  nodes: string[];
  function: string;
}

export interface TeachingStyle {
  name: string;
  verses: string;
  description:string;
  evidence: string;
  application: string;
}

export interface SabrePhase {
  name: string;
  objective: string;
  method: string;
  example: string;
}

export interface SabreModel {
  phases: SabrePhase[];
  characteristics: string[];
}

export interface LearningPlanSession {
  session: number;
  title: string;
  sabrePhase: string;
  segment: string;
  activity: string;
  characterCase: string;
  educationType: string;
  evaluation: string;
}

export interface CharacterCase {
  character: string;
  verses: string;
  caseDescription: string;
  learningFocus: string;
  educationType: string;
}

export interface Psalm8Connection {
  title: string;
  content: string;
}
