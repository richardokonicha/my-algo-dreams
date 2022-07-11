
def reverseLinkedList(root):
    current = root
    previous = None

    while current:
        next = current.next
        current.next = previous
        previous = current
        current = next

    return previous

    
