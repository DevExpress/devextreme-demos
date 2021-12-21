import 'testcafe';

type FrameworkType = 'jQuery' | 'React' | 'Angular' | 'Vue';

export function runManualTest(product:string, demo: string, framework: FrameworkType, callback: (test: TestFn) => void): void;