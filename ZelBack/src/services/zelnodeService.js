const cmd = require('node-cmd');
const path = require('path');

const packageJson = require('../../../package.json');
const serviceHelper = require('./serviceHelper');

// eslint-disable-next-line consistent-return
async function updateZelFlux(req, res) {
  const authorized = await serviceHelper.verifyZelTeamSession(req.headers);
  if (authorized === true) {
    const zelnodedpath = path.join(__dirname, '../../../');
    const exec = `cd ${zelnodedpath} && npm run updatezelflux`;
    cmd.get(exec, (err) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error updating ZelFlux: ${err.toString()}`,
          },
        };
        return res.json(errMessage);
      }
      const message = {
        status: 'success',
        data: {
          message: 'ZelFlux successfully updated',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

// eslint-disable-next-line consistent-return
async function rebuildZelFront(req, res) {
  const authorized = await serviceHelper.verifyZelTeamSession(req.headers);
  if (authorized === true) {
    const zelnodedpath = path.join(__dirname, '../../../');
    const exec = `cd ${zelnodedpath} && npm run zelfrontbuild`;
    cmd.get(exec, (err) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error rebuilding ZelFlux: ${err}`,
          },
        };
        return res.json(errMessage);
      }
      const message = {
        status: 'success',
        data: {
          message: 'ZelFlux successfully rebuilt',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

// eslint-disable-next-line consistent-return
async function updateZelCash(req, res) {
  const authorized = await serviceHelper.verifyZelTeamSession(req.headers);
  if (authorized === true) {
    const zelnodedpath = path.join(__dirname, '../../../helpers');
    const exec = `cd ${zelnodedpath} && sh updateZelCash.sh`;
    cmd.get(exec, (err) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error updating ZelCash: ${err}`,
          },
        };
        return res.json(errMessage);
      }
      const message = {
        status: 'success',
        data: {
          message: 'ZelCash successfully updated',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

// eslint-disable-next-line consistent-return
async function startZelCash(req, res) {
  const authorized = await serviceHelper.verifyAdminSession(req.headers);
  if (authorized === true) {
    const exec = 'zelcashd';
    cmd.get(exec, (err, data) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error starting ZelCash: ${err}`,
          },
        };
        return res.json(errMessage);
      }
      console.log(data);
      const message = {
        status: 'success',
        data: {
          message: 'ZelCash successfully started',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

// eslint-disable-next-line consistent-return
async function restartZelCash(req, res) {
  const authorized = await serviceHelper.verifyAdminSession(req.headers);
  if (authorized === true) {
    const zelnodedpath = path.join(__dirname, '../../../helpers');
    const exec = `cd ${zelnodedpath} && sh restartZelCash.sh`;
    cmd.get(exec, (err) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error updating ZelCash: ${err}`,
          },
        };
        return res.json(errMessage);
      }
      const message = {
        status: 'success',
        data: {
          message: 'ZelCash successfully updated',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

// eslint-disable-next-line consistent-return
async function reindexZelCash(req, res) {
  const authorized = await serviceHelper.verifyAdminSession(req.headers);
  if (authorized === true) {
    const zelnodedpath = path.join(__dirname, '../../../helpers');
    const exec = `cd ${zelnodedpath} && sh reindexZelCash.sh`;
    cmd.get(exec, (err) => {
      if (err) {
        const errMessage = {
          status: 'error',
          data: {
            message: `Error updating ZelCash: ${err}`,
          },
        };
        return res.json(errMessage);
      }
      const message = {
        status: 'success',
        data: {
          message: 'ZelCash successfully updated',
        },
      };
      return res.json(message);
    });
  } else {
    const errMessage = {
      status: 'error',
      data: {
        message: 'Unauthorized. Access denied.',
      },
    };
    return res.json(errMessage);
  }
}

function getZelFluxVersion(req, res) {
  const { version } = packageJson;
  return res.json(version);
}

module.exports = {
  startZelCash,
  updateZelFlux,
  rebuildZelFront,
  updateZelCash,
  restartZelCash,
  reindexZelCash,
  getZelFluxVersion,
};
