export const getThemePostfix = (theme: string): string => {
  const themeName = theme === 'generic.light' ? '' : ` (${theme})`;

  return themeName;
};

export async function testScreenshot(
  t: TestController,
  takeScreenshot: (screenshotName: string, element?: Selector | string | null) => Promise<boolean>,
  screenshotName: string,
  options?: {
    element?: Selector | string | null;
  },

): Promise<void> {
  const {
    element,
  } = options ?? {};

  await t
    .expect(await takeScreenshot(screenshotName.replace('.png', `${getThemePostfix(process.env.THEME)}.png`), element))
    .ok();
}


