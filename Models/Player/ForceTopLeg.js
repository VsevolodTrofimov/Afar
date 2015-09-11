#pragma strict

var anim : Animator;
var rb   : Rigidbody;

public class Legs {
	var left : boolean;
	var right : boolean;
	var top : boolean;
	var bottom : boolean;
	var back : boolean;
	function ClassName(){
		this.left = false;
		this.right = false;
		this.top = false;
		this.bottom = false;
		this.back = false;
	     
   }
	
};

var legs = new Legs();

function Start () {
	anim = GetComponent("Animator");
	rb = GetComponent.<Rigidbody>();
};

function LateUpdate () {
	
	anim.SetBool("LegLeftLaunch", legs.left);
	anim.SetBool("LegRightLaunch", legs.right);
	anim.SetBool("LegTopLaunch", legs.top);
	anim.SetBool("LegBottomLaunch", legs.bottom);
	anim.SetBool("LegBackLaunch", legs.back);
		
	if(Input.GetKeyDown(KeyCode.D)){
		if(legs.left){
			legs.left = false;
		} else {
			legs.left = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.A)){
		if(legs.right){
			legs.right = false;
		} else {
			legs.right = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.W)){
		if(legs.top){
			legs.top = false;
		} else {
			legs.top = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.X)){
		if(legs.bottom){
			legs.bottom = false;
		} else {
			legs.bottom = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.S)){
		if(legs.back){
			legs.back = false;
		} else {
			legs.back = true;
			
		}
	}
};