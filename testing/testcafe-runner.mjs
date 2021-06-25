import createTestCafe from 'testcafe';

function reporter() {
  return {
    noColors: false,
    startTime: null,
    afterErrorList: false,
    testCount: 0,
    skipped: 0,

    reportTaskStart(startTime, userAgents, testCount) {
      this.startTime = startTime;
      this.testCount = testCount;

      this.setIndent(1)
        .useWordWrap(true)
        .write(this.chalk.bold('Running tests in:'))
        .newline();

      userAgents.forEach((ua) => {
        this
          .write(`- ${this.chalk.blue(ua)}`)
          .newline();
      });
    },

    reportFixtureStart(name) {
      this.setIndent(1)
        .useWordWrap(true);

      if (this.afterErrorList) this.afterErrorList = false;
      else this.newline();

      this.write(name)
        .newline();
    },

    renderErrors(errs) {
      const filteredErrors = errs.filter((x) => {
        if (x && x.errMsg && x.errMsg.indexOf('INVALID_SCREENSHOT') !== -1) return false;
        return true;
      });
      if (!filteredErrors.length) return;

      this.setIndent(3)
        .newline();

      filteredErrors.forEach((err, index) => {
        const prefix = this.chalk.red(`${index + 1}) `);

        this.newline()
          .write(this.formatError(err, prefix))
          .newline()
          .newline();
      });
    },

    reportTestDone(name, testRunInfo) {
      const hasErr = !!testRunInfo.errs.length;
      let symbol = null;
      let nameStyle = null;

      if (testRunInfo.skipped) {
        this.skipped += 1;

        symbol = this.chalk.cyan('-');
        nameStyle = this.chalk.cyan;
      } else if (hasErr) {
        symbol = this.chalk.red.bold(this.symbols.err);
        nameStyle = this.chalk.red.bold;
      } else {
        symbol = this.chalk.green(this.symbols.ok);
        // eslint-disable-next-line spellcheck/spell-checker
        nameStyle = this.chalk.grey;
      }

      let title = `${symbol} ${nameStyle(name)} [${testRunInfo.durationMs} ms]`;

      this.setIndent(1)
        .useWordWrap(true);

      if (testRunInfo.unstable) title += this.chalk.yellow(' (unstable)');

      this.write(title);

      if (hasErr) this.renderErrors(testRunInfo.errs);

      this.afterErrorList = hasErr;

      this.newline();
    },

    renderWarnings(warnings) {
      this.newline()
        .setIndent(1)
        .write(this.chalk.bold.yellow(`Warnings (${warnings.length}):`))
        .newline();

      warnings.forEach((msg) => {
        this.setIndent(1)
          .write(this.chalk.bold.yellow('--'))
          .newline()
          .setIndent(2)
          .write(msg)
          .newline();
      });
    },

    reportTaskDone(endTime, passed, warnings) {
      const durationMs = endTime - this.startTime;
      const durationStr = this.moment.duration(durationMs).format('h[h] mm[m] ss[s]');
      let footer = passed === this.testCount
        ? this.chalk.bold.green(`${this.testCount} passed`)
        : this.chalk.bold.red(`${this.testCount - passed}/${this.testCount} failed`);

      // eslint-disable-next-line spellcheck/spell-checker
      footer += this.chalk.grey(` (${durationStr})`);

      if (!this.afterErrorList) this.newline();

      this.setIndent(1)
        .useWordWrap(true);

      this.newline()
        .write(footer)
        .newline();

      if (this.skipped > 0) {
        this.write(this.chalk.cyan(`${this.skipped} skipped`))
          .newline();
      }

      if (warnings.length) this.renderWarnings(warnings);
    },
  };
}

async function main() {
  const tester = await createTestCafe();
  const runner = tester.createRunner();

  await runner
    .reporter(reporter)
    .run();

  await tester.close();
}

main();
