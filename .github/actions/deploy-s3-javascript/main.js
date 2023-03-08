import core from '@actions/core';
import github from '@actions/github';
import exec from '@actions/exec';

const run = () => {
    core.notice('Hello from my custom JavaScript action!');
};

run();
