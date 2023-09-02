const catchAsync = function (callback) {
    return (req, res, next) => {
        callback(req, res, next)
            .catch(() => {
                next(err);
            })
    }
}

module.exports = catchAsync;