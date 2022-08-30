#  implement a hashtable that maps keys to values for highly efficient lookup
class Hashtable:
  hashList = []
  size = 10
  
  def __init__(self):
    self.hashList = [[] for i in range(self.size)]

  def __str__(self):
    return(self.hashList)

  def set(self, key, value):
    hashcode = hash(key)
    hashindex = hashcode % self.size
    hashpointer = self.hashList[hashindex]
    hashpointer.append((key, value))

  def get(self, key):
    hashcode = hash(key)
    hashindex = hashcode % self.size
    hashpointer = self.hashList[hashindex]
    for i in hashpointer:
      if i[0] == key:
        return i
    return False 

  def delete(self, key):
    hashcode = hash(key)
    hashindex = hashcode % self.size
    hashpointer = self.hashList[hashindex]
    found = False
    for index, i in enumerate(hashpointer):
      if i[0] == key:
        hashpointer.pop(index)
        return
    return False


list1 = Hashtable()
list1.set("hello", "Richard")
list1.set("generate", "Paul")
print(list1.get("hello"))

list2 = Hashtable()
list2.set("wayne", "lil")
list2.set("goat", "messi")
print(list2.get("goat"))
print(list1.get("goat"))

list1.delete("generate")
list2.delete("goat")
# list1.delete("hello")

[print(i) for i in list1.hashList]

