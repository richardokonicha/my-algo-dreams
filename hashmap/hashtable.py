
# Hashmaps are indexed data structures, A hashmap makes use of a hash function 
# to compute an index with a key into an array of buckets or slots.


class HashTable:
  """ Implementation of hashtable in python """

  # create empty bucket list of given size
  def __init__(self, size):
    self.size = size
    self.hash_table = self.create_buckets()
  
  def create_buckets(self):
    return [[] for _ in range(self.size)]

  # insert values into hashmap
  def set_val(self, key, val):
    # get the index from the key using hash function
    hashed_key = hash(key) % self.size
    # get the bucket corresponding to index
    bucket = self.hash_table[hashed_key]
    found_key = False
    for index, record in enumerate(bucket):
      record_key, record_val = record
      # check if the bucket has same key as key to be inserted
      if record_key == key:
        found_key = True
        break
    # if the bucket has same key as the key to be inserted updated key value
    # Otherwise append the new key value pair to the bucket
    if found_key:
      bucket[index] = (key, val)
    else:
      bucket.append((key, val))
    
  # return searched value with specific key
  def get_val(self, key):
    # get the index from the key using hash function
    hashed_key = hash(key) % self.size
    # get the bucket corresponding to the index
    bucket = self.hash_table[hashed_key]
    found_key = False
    for index, record in enumerate(bucket):
      record_key, record_val = record
      # check if the bucket has same key as key being searched
      if record_key == key:
        found_key = True
        break
    # if the bucket has same key as key being searched return value
    if found_key:
      return record_val
    else:
      return "No record found"

  # remove a value with specific key
  def delete_val(self, key):
    # get the index from the key using hash function
    hashed_key = hash(key) % self.size
    # get the bucket corresponding to index
    bucket = self.hash_table[hash_key]
    found_key = False
    for index, record in enumerate(bucket):
      # check if the bucket has same key as key to be deleted
      if record_key == key:
        found_key = True
        break
    if found_key:
      bucket.pop(index)
    return

  # to print the items of hash map
  def __str__(self):
    return " ".join([str(item) for item in self.hash_table])

hash_table = HashTable(10)


hash_table.set_val('richie', "Richard Okonicha")
print(hash_table)

hash_table.get_val('richie')
