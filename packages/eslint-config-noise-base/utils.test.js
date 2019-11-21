const { extendRule, extendRules } = require('./utils');

describe('extendRule()', () => {
  it('should extend object', () => {
    const rule = ['error', { option1: true }];
    expect(extendRule(rule, { option2: true })).toEqual([
      'error',
      { option1: true, option2: true },
    ]);
  });

  it('should override primitive options', () => {
    const rule = ['error', 'primitive-option-1'];
    expect(extendRule(rule, 'primitive-option-2')).toEqual([
      'error',
      'primitive-option-2',
    ]);
  });

  it('should handle null', () => {
    const rule1 = ['error', null];
    expect(extendRule(rule1, 'primitive-option')).toEqual([
      'error',
      'primitive-option',
    ]);
    const rule2 = ['error', 'primitive-option'];
    expect(extendRule(rule2, null)).toEqual(['error', null]);
  });

  it('should merge nested array', () => {
    const rule = ['error', { option: ['ab', 'cd'] }];
    expect(extendRule(rule, { option: ['ef', 'gh'] })).toEqual([
      'error',
      { option: ['ab', 'cd', 'ef', 'gh'] },
    ]);
  });

  it('should merge nested object', () => {
    const rule = ['error', { option: { nested1: true } }];
    expect(extendRule(rule, { option: { nested2: true } })).toEqual([
      'error',
      { option: { nested1: true, nested2: true } },
    ]);
  });

  it('should override array with primitive', () => {
    const rule = ['error', { option: ['ab', 'cd'] }];
    expect(extendRule(rule, { option: true })).toEqual([
      'error',
      { option: true },
    ]);
  });

  it('should override primitive with array', () => {
    const rule = ['error', { option: true }];
    expect(extendRule(rule, { option: ['ab', 'cd'] })).toEqual([
      'error',
      { option: ['ab', 'cd'] },
    ]);
  });

  it('should override array with object', () => {
    const rule = ['error', { option: ['ab', 'cd'] }];
    expect(extendRule(rule, { option: { ef: true } })).toEqual([
      'error',
      { option: { ef: true } },
    ]);
  });

  it('should override object with array', () => {
    const rule = ['error', { option: { ab: true } }];
    expect(extendRule(rule, { option: ['cd', 'ef'] })).toEqual([
      'error',
      { option: ['cd', 'ef'] },
    ]);
  });

  it('should unset properties with undefined', () => {
    const rule = ['error', { option: 'value' }];
    expect(extendRule(rule, { option: undefined })).toEqual([
      'error',
      { option: undefined },
    ]);
  });
});

describe('mergeRules()', () => {
  it('should throw when trying to extend a rule that does not exist', () => {
    expect(() =>
      extendRules({}, { 'rule-key': {} }),
    ).toThrowErrorMatchingSnapshot();
  });

  it('should merge multiple rules', () => {
    const baseRules = {
      'rule-key-1': ['error', { option1: 'value' }],
      'rule-key-2': ['warning', { option: ['ab', 'cd'] }],
    };
    expect(
      extendRules(baseRules, {
        'rule-key-1': { option2: 'value' },
        'rule-key-2': { option: ['ef'] },
      }),
    ).toEqual({
      'rule-key-1': ['error', { option1: 'value', option2: 'value' }],
      'rule-key-2': ['warning', { option: ['ab', 'cd', 'ef'] }],
    });
  });
});
