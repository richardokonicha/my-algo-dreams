from threading import Thread
from time import sleep

def sleepFn(time):
    sleep(time)
    print(time)
    return

def makeThread(threadList: list):
    length = range(len(threadList))
    for i in length:
        thread = Thread(target=sleepFn, args=[threadList[i]])
        thread.start()

makeThread([3, 1, 2, 7 ])