const getPageNoAndPageSize = (pageNo, pageSize) => {
    pageNo = parseInt(pageNo);
    pageSize = parseInt(pageSize);
    const start = (pageNo - 1) * pageSize;
    const end = (pageNo - 1) * pageSize + pageSize;
    return { start, end };
}

module.exports = {
    getPageNoAndPageSize
}