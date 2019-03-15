/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloUser = (req, res) => {
    let message = req.query.name || req.body.name || 'Stranger';
    res.status(200).send('Hi there ' + message + '!');
};
  