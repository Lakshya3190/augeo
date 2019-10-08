import React, { Component } from "react";
import Sketch from "react-p5";



function SmartRocket()
{
  var popu;
  var lifespan = 400;
  var lifeP;
  var count = 0;
  var target;
  var maxForce = 0.3;

  var rx = 100;
  var ry = 150;
  var rw = 200;
  var rh = 10

  function setup(p5,parent) 
  {
    p5.createCanvas(400, 400).parent(parent);
    rocket = new Rocket();
    popu = new Population();
    lifeP = createP();
    target = createVector(width/2, 50);
  }


  function draw(p5) 
  {
    p5.background(0);
    popu.p5.run();
    lifeP.p5.html(count);
    count++;
    if(count == lifespan)
    {
      popu.p5.evaluate();
      popu.p5.selection();
      count = 0;
    }
    
    p5.fill(255);
    p5.rect(100,150,200,10)

    p5.ellipse(target.x, target.y, 20,20);
    
  }


  function Population()
  {
    this.rockets = [];
    this.popsize = 25;
    this.matingpool = [];

    for(var i =0; i< this.popsize; i++)
    {
      this.rockets[i] = new Rocket();
    }

    this.p5.evaluate = function()
    {
      var maxfit = 0;

      for(var i = 0; i<this.popsize; i++)
      {
        this.rockets[i].calcFitness();
        if(this.rockets[i].fitness > maxfit)
        {
          maxfit = this.rockets[i].fitness;
        }

      }

      

      //Normalizing the fitness values
      for(var i = 0; i<this.popsize; i++)
      {
        this.rockets[i].fitness /= maxfit;

      }

      this.matingpool = [];

      for(var i = 0; i<this.popsize; i++)
      {
        var n = this.rockets[i].fitness * 100;
        for(var j = 0; j< n; j++)
        {
          this.matingpool.push(this.rockets[i]);
        }
      }
    }


    this.selection = function()
    {
      var newRockets = [];
      for(var i =0; i<this.rockets.length; i++)
      {
        var parentA = random(this.matingpool).dna; //Pick random element from mating pool
        var parentB = random(this.matingpool).dna;
        var child = parentA.crossover(parentB);
        child.mutation();
        newRockets[i] = new Rocket(child);
      }

      this.rockets = newRockets;
    }


    this.run = function()
    {
      for(var i =0; i< this.popsize; i++)
      {
        this.rockets[i].update();
        this.rockets[i].show();
      }
    }
  }

  function DNA(genes)
  {
    if(genes)
    {
      this.genes = genes;
    }
    else
    {
      this.genes = [];
      for (var i = 0; i < lifespan; i++)
      {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxForce);
      }
    }

    this.crossover = function(partner)
    {
      var newgenes = [];
      var mid = floor(random(this.genes.length));
      for(var i = 0; i<this.genes.length; i++)
      {
        if(i>mid)
        {
          newgenes[i] = this.genes[i];
        }
        else
        {
          newgenes[i]=partner.genes[i];
        }
      }
      return new DNA(newgenes);
    }

    this.mutation = function()
    {
      for(var i=0; i<this.genes.length; i++)
      {
        if(p5.random(1)<0.01)
        {
          this.genes[i] = p5.Vector.random2D();
          this.genes[i].p5.setMag(maxForce);
        }
      }
    }
  }


  function Rocket(dna)
  {
    this.pos = p5.createVector(width/2, height);
    this.vel = p5.createVector();
    this.acc = p5.createVector();
    this.completed = false;
    this.crashed = false;

    if(dna)
    {
      this.dna = dna;
    }
    else
    {
      this.dna = new DNA();
    }

    this.fitness = 0;

    this.p5.applyForce = function(force) 
    {
      this.acc.p5.add(force);
    }

    this.p5.calcFitness = function()
    {
      var d = p5.dist(this.pos.x, this.pos.y, target.x, target.y);
      this.fitness = p5.map(d,0,width,width,0);
      if(this.completed)
      {
        this.fitness *= 10;
      }
      if(this.crashed)
      {
        this.fitness /= 10;
      }
    }

    this.update = function()
    {
      var d = p5.dist(this.pos.x, this.pos.y, target.x, target.y);
      if(d<10)
      {
        this.completed=true;
        this.pos = target.p5.copy();
      }

      if(this.pos.x > rx && this.pos.x < rx+rw && this.pos.y> ry && this.pos.y < ry+rh)
      {
        this.crashed = true;
      }

      if(this.pos.x > width || this.pos.x < 0)
      {
        this.crashed = true;
      }

      if(this.pos.y > height || this.pos.y < 0)
      {
        this.crashed = true;
      }
      this.p5.applyForce(this.dna.genes[count]);
      if(!this.completed && !this.crashed)
      {
        this.vel.p5.add(this.acc);
        this.pos.p5.add(this.vel);
        this.acc.p5.mult(0);
        this.vel.p5.limit(4);
      }
    }

    this.show = function(p5) 
    {
      p5.push();
      p5.noStroke();
      p5.fill(355,155);
      p5.translate(this.pos.x, this.pos.y);
      p5.rotate(this.vel.heading());
      p5.rectMode(CENTER);
      p5.rect(0, 0, 30, 10);
      p5.pop();
    }
  }

  return(
    <Sketch setup={this.setup} draw={this.draw} />
  );

}


export default SmartRocket;