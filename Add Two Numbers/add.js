
function ListNode(val) {
    this.val = val
    this.next = null
}
/**
 * 
 * @param {Array} sum 
 */
var NumberToNode = function NumberToNode(sum) {
    sum = sum.reverse();
    var prev = null;
    var next = null;
    if (sum && sum.length) {
        var n = Number(sum[0]);
        prev = new ListNode(n);
        for (var index = 1; index < sum.length; index++) {
            n = Number(sum[index])
            next = new ListNode(n);
            next.next = prev;
            prev = next;
        }

    }
    return prev

}

var l = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
var s = [5, 6, 4]
var list1 = NumberToNode(l)
var list2 = NumberToNode(s)

var addTwoNumbers = function (l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q = l2; curr = dummyHead;
    var carry = 0; //为了进位
    var sum = 0;
    while (p || q) {
        var x = p ? p.val : 0;
        var y = q ? q.val : 0;
        sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}


var node = addTwoNumbers(list1, list2)

logNode(node)
function logNode(node) {
    while (node) {
        console.log("------", node.val)
        node = node.next
    }
}