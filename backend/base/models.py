from django.db import models
from django.contrib.auth.models import User
from django.db.models import Model, ForeignKey, IntegerField, CharField, TextField, DecimalField, DateTimeField, AutoField, BooleanField, ImageField
from django.db.models.deletion import CASCADE, SET_NULL
from django.db.models.fields.related import OneToOneField

# Create your models here.


class Product(models.Model):
    user = ForeignKey(User, on_delete=SET_NULL, null=True)
    name = CharField(max_length=200, null=True, blank=True)
    image = ImageField(null=True, blank=True)
    brand = CharField(max_length=200, null=True, blank=True)
    category = CharField(max_length=200, null=True, blank=True)
    description = TextField(null=True, blank=True)
    rating = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = IntegerField(null=True, blank=True, default=0)
    price = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = IntegerField(null=True, blank=True, default=0)
    createdAt = DateTimeField(auto_now_add=True)
    _id = AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class Review(Model):
    user = ForeignKey(User, on_delete=SET_NULL, null=True)
    product = ForeignKey(Product, on_delete=SET_NULL, null=True)
    name = CharField(max_length=200, null=True, blank=True)
    rating = IntegerField(null=True, blank=True, default=0)
    comment = TextField(null=True, blank=True)
    createdAt = DateTimeField(auto_now_add=True)
    _id = AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(Model):
    user = ForeignKey(User, on_delete=SET_NULL, null=True)
    paymentMethod = CharField(max_length=200, null=True, blank=True)
    taxPrice = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = BooleanField(default=False)
    paidAt = DateTimeField(null=True, blank=True, auto_now_add=False)
    isDelivered = BooleanField(default=False)
    deliveredAt = DateTimeField(null=True, blank=True, auto_now_add=False)
    createdAt = DateTimeField(auto_now_add=True)
    _id = AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(Model):
    order = ForeignKey(Order, on_delete=SET_NULL, null=True)
    product = ForeignKey(Product, on_delete=SET_NULL, null=True)
    name = CharField(max_length=200, null=True, blank=True)
    qty = IntegerField(null=True, blank=True, default=0)
    price = DecimalField(max_digits=7, decimal_places=2,
                         null=True, blank=True)
    image = CharField(max_length=200, null=True, blank=True)
    _id = AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(Model):
    order = OneToOneField(Order, on_delete=CASCADE, null=True, blank=True)
    address = CharField(max_length=200, null=True, blank=True)
    city = CharField(max_length=200, null=True, blank=True)
    postalCode = CharField(max_length=200, null=True, blank=True)
    country = CharField(max_length=200, null=True, blank=True)
    shippingPrice = DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
