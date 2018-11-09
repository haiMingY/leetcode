/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL){};
};

class Solution
{
  public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        ListNode *temp = new ListNode(0);
        ListNode *p = l1;
        ListNode *q = l2;
        ListNode *curr = temp;
        int carry = 0;
        int sum = 0;
        while (p != NULL || q != NULL)
        {
            int x = 0;
            int y = 0;
            if (p != NULL)
            {
                x = p->val;
                p = p->next;
            }
            if (q != NULL)
            {
                y = q->val;
                q = q->next;
            }

            sum = carry + x + y;
            carry = sum / 10; //是为了大于10 进1
            curr->next = new ListNode(sum % 10);
            curr = curr->next;
        }

        if (carry > 0)
        {
            curr->next = new ListNode(carry);
        }
        return temp->next;
    }
};