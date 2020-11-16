import re
import math
print('\nPractice Algorithms --------------------------------------------------------------------\n')

# method to print the fraction of negative, positive and zero numbers in an array
def plus_minus(arr):
    negative, positive, zero = [], [], []
    for i in range(len(arr)):
        if arr[i] == 0: zero.append(arr[i])
        elif arr[i] < 0: negative.append(arr[i])
        else: positive.append(arr[i])
    return [ len(positive) / len(arr), len(negative) / len(arr), len(zero) / len(arr) ]
# print( "plus_minus: " + str(plus_minus([1,1,0,-1,-1])) + "\n")


# method to print a staircase of hashes based on the number passed
def staircase(n):
    for i in range(n+1):
        if i == 0: continue
        stair, hashes = [], []
        for j in range(i): stair.append('#')
        for j in range(n - len(stair)): hashes.append(' ')
        print(''.join(hashes) + ''.join(stair))
# staircase(5)
# print('staircase of 5\n')
# staircase(10)
# print('staircase of 10\n')


# given an array of 5 numbers, get the highest value and the lowest value by adding 4 of the 5
def miniMaxSum(arr):
    min_num, max_num = min(arr), max(arr)
    num_one, num_two = 0, 0
    arr.remove(min_num)
    for i in range(len(arr)): num_two += arr[i]
    arr.append(min_num)
    arr.remove(max_num)
    for i in range(len(arr)): num_one += arr[i]
    return str(num_one) + " " + str(num_two)
# print("miniMaxSum: " + miniMaxSum([1,3,5,7,9]) + "\n")


# given an array of "candles", you can only blow out the tallest ones
def birthdayCakeCandles(ar):
    max_num = 0
    for i in range(len(ar)):
        if max_num < ar[i]: max_num = ar[i]
    instances = 0
    for i in range(len(ar)):
        if ar[i] == max_num: instances += 1
    return instances
# print("birthdayCakeCandles: " + str(birthdayCakeCandles([3,3,1,2])) + "\n")


# convert a time to millitary time
def timeConversion(s):
    mil_time = s.split(':')
    if ("PM" in s and not s[:2] == "12") or ("12" in s and "AM" in s): mil_time[0] = str(int(mil_time[0]) + 12)
    if len(mil_time[0]) == 1: mil_time[0] = "0" + mil_time[0]
    if mil_time[0] == "24": mil_time[0] = "00"
    if len(mil_time[1]) == 1: mil_time[1] = "0" + mil_time[0]
    if len(mil_time[2]) == 1: mil_time[2] = "0" + mil_time[0]
    mil_time[2] = mil_time[2][:2]
    mil_time = ':'.join(mil_time)
    return mil_time
# print("timeConversion: " + timeConversion('07:05:45PM') + "\n")


# reverse columns in a matrix to get the highest number  inthe 
def flippingMatrix(matrix):
    max_num = 0
    for row in range(len(matrix)):
        if not row == 0: print('')
        for col in range(len(matrix[row])):
            print(matrix[row][col],end=" ")
# flippingMatrix([ [34,90], [12,46] ])
# print('\nflippingMatrix\n')


# you are given grades, round student's grades to the fifth only if they are above 37
def gradingStudents(grades):
    new_grades = []
    for i in range(len(grades)):
        if grades[i] > 37:
            if (int(str(grades[i])[-1]) + 2 == 5) or (int(str(grades[i])[-1]) + 2 == 10): new_grades.append(grades[i] + 2)
            elif (int(str(grades[i])[-1]) + 1 == 5) or (int(str(grades[i])[-1]) + 1 == 10): new_grades.append(grades[i] + 1)
            else: new_grades.append( str(grades[i]) )
        else: new_grades.append(grades[i])
        new_grades[i] = int(new_grades[i])
    return new_grades
# print("gradingStudents: " + str(gradingStudents([39,27,89,56,47,38])) + "\n")


# count the number of pairs of socks in a given array, return number of pairs
def sockMerchant(ar):
    socks = {}
    pairs = 0
    for i in range(len(ar)):
        try: socks[ar[i]] += 1
        except: socks[ar[i]] = 1
    for key in socks: pairs += math.floor(socks[key] / 2)
    return pairs
# print("sockMerchant: " + str(sockMerchant(["hearts","stripes","yellow","pink","stripes","yellow"])))
# print('\n')


# count the number of pages you need to flip to get from page n to p
def pageCount(n, p):
    page_flips = 0
    if n > p: # from end to start
        while n > p:
            print(n)
            print('flip')
            page_flips += 1
            if n % 2 == 0: n -= 1
            else: n -= 2
    else: # from start to end
        while n < p:
            print(n)
            print('flip')
            page_flips += 1
            if n % 2 == 0: n += 1
            else: n += 2
# pageCount(6,14)


# function to determine whether lst1 is equal to lst2 but reversed
def reversed_list(lst1,lst2):
    # print(str(lst1) + ", " + str(lst2))
    for i in range(len(lst1)):
        if lst1[i] == lst2[abs(len(lst1)-(i+1))]: continue
        else: return False
    return True
# print("\nThe lists [8,5,9],[9,5,8] are the same: " + str(reversed_list([8,5,9],[9,5,8]))) # true
# print("The lists [7,1,2],[1,2,7] are the same: " + str(reversed_list([7,1,2],[1,2,7]))) # false
# print('\n')


# WHILE LOOP EXAMPLE 1 (number guess)
# from random import randint # module to 
# while (True):
#     user_num = input('Guess a Number (1 - 10): ') # prompt user to guess num
#     rand_num = randint(1,10) # generate random num
#     print("The Number is: {}".format(str(rand_num)))

#     if user_num == str(rand_num): # if user guess correct
#         print('You Won!')
    
#     # would user like to guess again?
#     answer = input("Would you Like to Guess Again? ")
#     if answer.lower() == "yes" or answer.lower() == "y":
#         continue # if they would, go to next iteration in loop
#     else:
#         break # if not, break out of loop
# print('\n')


# WHILE LOOP EXAMPLE 2 (countdown)
from time import sleep
num = 10
# print('This Program Will End in: ')
# while (num > 0): # printing a countdown of 10 seconds
#     print(num)
#     sleep(1)
#     num -= 1


# check if 2 strings are connected by the alphabet 
def has_pattern(str_one,str_two):
    # make the two strings lowercase
    str_one = str_one.lower()
    str_two = str_two.lower()

    # check if there is one-to-one character mapping in first string
    for i in range(1,len(str_one)):
        if (ord(str_one[i])) != (ord(str_one[i-1]) + 1):
            return False # if not, return false

    # check if there is one-to-one character mapping in second string
    for i in range(1,len(str_two)):
        if (ord(str_two[i])) != (ord(str_two[i-1]) + 1):
            return False # if not, return false
    
    # check if last character of first string maps with first character of second string
    if ord(str_one[-1]) + 1 == ord(str_two[0]):
        return True # if found, return true
    else: # if not, return false
        return False
# print( "abc/def: " + str(has_pattern('abc','def')) )
# print( "abc/bba: " + str(has_pattern('abc','bba')) )
# print('\n')


# check if two strings have one-on-one mapping or not
def char_mapping(str_one,str_two):
    if len(str_one) != len(str_two): # if the lengths arent the same, the strings dont map
        return False

    mapped_chars = {} # compare values between string one and string two
    for i in range(len(str_one)): # check that items in string one match those in string two if repeated
        if str_one[i] in mapped_chars:
            if mapped_chars[str_one[i]] != str_two[i]: # if character is repeated and doesnt match original value
                return False
        mapped_chars[str_one[i]] = str_two[i] # add item of string one as key and string two as value
    
    mapped_chars = {} # compare values between string two and string one
    for i in range(len(str_two)): # check that items in string two match those in string one if repeated
        if str_two[i] in mapped_chars:
            if mapped_chars[str_two[i]] != str_one[i]: # if character is repeated and doesnt match original value
                return False
        mapped_chars[str_two[i]] = str_one[i] # add item of string two as key and string one as value

    return True # if no issues were found, return true
# print( "cappu/ccino: " + str(char_mapping('cappu','ccino')) )
# print( "buil/ding: " + str(char_mapping('buil','ding')) )
# print('\n')


# finds damaged letters in SOS message (SOSSOSSOS - not damaged; SOSTOTSOQ - damaged)
def marsExploration(s):
    num_errors = 0
    num_sos = int(len(s) / 3)
    for i in range(len(s)):
        if i % 3 == 0:
            if s[i] != "S": num_errors += 1
            if s[i+1] != "O": num_errors += 1
            if s[i+2] != "S": num_errors += 1
    return num_errors
# print(marsExploration("SOSTOSSQSSTT"))
# print("\n")


# vowels: a, e, i, o, u - find whether a string contains all vowels
def findSubstring(s, k):
    substring = ""
    vowels = 0
    for i in range(len(s)):
        if not i + k >= len(s):
            sub = s[i:i+k]
            vowl = len(re.findall("[aeiouAEIOU]",sub))
            if vowl > vowels:
                vowels = vowl
                substring = sub
        else: break
    if substring: return substring
    else: return "Not found!"
# print(findSubstring("caberqiitefg",5))
# print('\n')


# find whether a string contains all letters of the alphabet
def is_pangram(string):
    for i in range(97,123):
        if (not chr(i) in string) and (not chr(i-32) in string):
            return False
    return True
# print(is_pangram('We promptly judged antique ivory buckles for the next prize'))


# create a function that takes an array of numbers and returns the smallest number in the set.
def findSmallestNum(nums):
    smallest = nums[0]
    for i in range(len(nums)):
        if smallest > nums[i]: smallest = nums[i]
    return smallest
# print(findSmallestNum([34, 15, 88, 2]))
# print("\n")


def odd_product(lst):
    sum = 1
    for i in range(len(lst)):
        if lst[i] % 2 != 0:
            sum *= lst[i]
    return sum
# print(odd_product([3, 4, 1, 1, 5]))

